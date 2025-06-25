import Footer from "components/Footer/Footer";
import ScrollToTop from "components/ScrollToTop";
import React, { useState } from "react";
import EmptyList from "../Common/EmptyList";
import { blogList5 } from "../config/data_study2";
import BlogList3 from "./Home/BlogList3";
import Header5 from "./Home/Header/Header5";
import SearchBar2 from "./Home/SearchBar/Searchbar2";
import Credits from "./Home/Header/Credits";
const Study2 = () => {
    const [blogs, setBlogs] = useState(blogList5);
    const [searchKey, setSearchKey] = useState("");

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      handleSearchResults();
    };
  
    const handleSearchResults = () => {
      const allBlogs = blogList5;
      const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(searchKey.toLocaleLowerCase().trim()) 
      );
      setBlogs(filteredBlogs);
    };
  
  
    //arrow function
    const handleClearSearch=()=>{
        setBlogs(blogList5);
        setSearchKey('');
    }

    return ( 
        <div>
            {/* Page Header */}
            <Header5 />
            <SearchBar2
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchSubmit}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />
            {/* Search Bar */}
            {/* Blog list and Empty List */}
            {!blogs.length ? <EmptyList/> :<BlogList3 blogs={blogs} />}
            <Credits></Credits>
          <Footer/>
      <ScrollToTop/>
    </div>
     );
}
 
export default Study2;