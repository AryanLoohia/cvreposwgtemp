import React from "react";
import CVcard from "./CVcard";
import "./cvlayout.css";

const CVlayout = ({ blogs }) => {
  return (
    <div className="cvlayout">
      {blogs.map((blog, index) => (
        <CVcard blog={blog} key={blog.id} index={index} blogs={blogs}/>
      ))}
    </div>
  );
};

export default CVlayout;

