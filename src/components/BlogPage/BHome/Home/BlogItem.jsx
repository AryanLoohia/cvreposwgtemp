import Chip from "components/BlogPage/Common/Chip";
import React from "react";
import "./BlogItemStyles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
const BlogItem = (
  {
    blog: {
      description,
      title,
      createdAt,
      category,
      cover,
      medium
    },
  }
) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <a target="_blank" href={medium} className="blogs-link">
    <div className="blogItem-wrap rev">
      <img src={cover} alt="cover" className="blogItem-cover"/>
      <Chip label={category}/>
      <h3>{title}</h3>
      <p className="blogItem-desc">
        {description}
      </p>
      <footer>
        <div className="blogItem-author">
            <div>
                <p>
                    {createdAt}
                </p>
            </div>
        </div>
        <a href={medium} className="blogItem-link"> →</a>
      </footer> 
    </div>
    </a>
  )
}
export default BlogItem;
