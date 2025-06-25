import "./BlogItem3Styles.css";
import React from "react";
const BlogItem3 = (
  {
    blog: {
      title,
      cover,
      medium
    },
  }
) => {
  return (
    <div className="blogs-link3">
      <a target="_blank" href={medium}>
        <div className="blogItem-wrap3">
          <img src={cover} alt="cover" className="blogItem-cover3"/>
          <h3>{title}</h3> 
        </div>
      </a>
    </div>
  )
}
export default BlogItem3;
