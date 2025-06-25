import React from "react";
import "./BlogItem2Styles.css";
import "./BlogItemStyles.css";
const BlogItem = (
  {
    blog: {
      title,
      cover,
      medium
    },
  }
) => {
  return (
    <div className="blogs-link2">
    <a target="_blank" href={medium}>
    <div className="blogItem-wrap2">
      <img src={cover} alt="cover" className="blogItem-cover2"/>
      <h3>{title}</h3> 
    </div>
    </a>
</div>
  )
}
export default BlogItem;
