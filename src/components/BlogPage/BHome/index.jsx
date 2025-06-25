import React, { useState } from "react";
import EmptyList from "../Common/EmptyList";
import BlogList from "./Home/BlogList";
import { blogList3 } from "../config/data_adieu";
import Header3 from "./Home/Header/Header3";
import Internblogs from "./internblogs";

const BHome = () => {
  const [blogs3,setBlogs3] = useState(blogList3);

  return (
    <div>
    <Internblogs />
    <div>
      {/* Page Header */}
      <Header3 />
      {/* Blog list and Empty List */}
      {!blogs3.length ? <EmptyList/> :<BlogList blogs={blogs3} />}

    </div>
    </div>
  );
};

export default BHome;
