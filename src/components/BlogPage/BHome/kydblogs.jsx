import Footer from "components/Footer/Footer";
import ScrollToTop from "components/ScrollToTop";
import React, { useState } from "react";
import EmptyList from "../Common/EmptyList";
import { blogList4 } from "../config/data_kyd";
import BlogList2 from "./Home/BlogList2";
import Header4 from "./Home/Header/Header4";
import SearchBar2 from "./Home/SearchBar/Searchbar2";

const KYDblogs = () => {
    const [blogs, setBlogs] = useState(blogList4);
    const [searchKey, setSearchKey] = useState("");

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      handleSearchResults();
    };
  
    const handleSearchResults = () => {
      const allBlogs = blogList4;
      const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(searchKey.toLocaleLowerCase().trim()) 
      );
      setBlogs(filteredBlogs);
    };
  
    const handleClearSearch=()=>{
        setBlogs(blogList4);
        setSearchKey('');
    }

    return ( 
        <div>
            {/* Page Header */}
            <Header4 />
            <SearchBar2
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchSubmit}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />
            {!blogs.length ? <EmptyList/> :<BlogList2 blogs={blogs} />}
            <Footer/>
            <ScrollToTop/>
    </div>
     );
}
 
export default KYDblogs;