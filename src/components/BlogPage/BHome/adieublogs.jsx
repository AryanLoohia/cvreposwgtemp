import Footer from "components/Footer/Footer";
import ScrollToTop from "components/ScrollToTop";
import React, { useState } from "react";
import EmptyList from "../Common/EmptyList";
import { blogList3 } from "../config/data_adieu";
import BlogList from "./Home/BlogList";
import Header3 from "./Home/Header/Header3";

const Adieublogs = () => {
    const [blogs, setBlogs] = useState(blogList3);


    return ( 
        <div>
            {/* Page Header */}
            <Header3 />
            {/* Search Bar */}
            {/* Blog list and Empty List */}
            {!blogs.length ? <EmptyList/> :<BlogList blogs={blogs} />}
            <Footer/>
            <ScrollToTop/>

    </div>
     );
}
 
export default Adieublogs;