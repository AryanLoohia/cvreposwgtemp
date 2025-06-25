import Footer from "components/Footer/Footer";
import ScrollToTop from "components/ScrollToTop";
import React, { useState } from "react";
import EmptyList from "../Common/EmptyList";
import { blogListintern } from "../config/data_internships";
import BlogList from "./Home/BlogList";
import Header2 from "./Home/Header/Header2";
import SearchBar from "./Home/SearchBar";

const Internblogs = () => {
    const [blogs, setBlogs] = useState(blogListintern);
  const [searchKey, setSearchKey] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogListintern;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLocaleLowerCase().trim()) || blog.company.toLowerCase().includes(searchKey.toLocaleLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };


  const handleClearSearch=()=>{
      setBlogs(blogListintern);
      setSearchKey('');
  }
    return ( 
        <div>
          
            <Header2 />
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
 
export default Internblogs;