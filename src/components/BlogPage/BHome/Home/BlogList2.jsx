import React from "react";
import BlogItem from "./BlogItem2";
import './BlogListStyles.css'

const BlogList2 = ({ blogs }) => (
    <div className="blogList-wrap2">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id}/>
      ))}
    </div>
  );

export default BlogList2;
