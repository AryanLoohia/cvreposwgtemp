import Footer from "components/Footer/Footer";
import ScrollToTop from "components/ScrollToTop";
import React, { useState } from "react";
import EmptyList from "../Common/EmptyList";
import { blogList } from "../config/data_placements";
import BlogList from "./Home/BlogList";
import Header from "./Home/Header";
import SearchBar from "./Home/SearchBar";

const Placementblogs = () => {
    const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLocaleLowerCase().trim()) || blog.company.toLowerCase().includes(searchKey.toLocaleLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };


  const handleClearSearch=()=>{
      setBlogs(blogList);
      setSearchKey('');
  }
    return ( 
        <div>
            <Header />
            <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchSubmit}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />
            {!blogs.length ? <EmptyList/> :<BlogList blogs={blogs} />}
            <Footer/>
            <ScrollToTop/>
    </div>
     );
}
 
export default Placementblogs;