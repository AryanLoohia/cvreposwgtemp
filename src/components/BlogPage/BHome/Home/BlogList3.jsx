import React from "react";
import BlogItem3 from "./BlogItem3";
import './BlogListStyles.css'

const BlogList3 = ({ blogs }) => (
    <div className="blogList-wrap2">
      {blogs.map((blog) => (
        <BlogItem3 blog={blog} key={blog.id}/>
      ))}
    </div>
  );

export default BlogList3;
