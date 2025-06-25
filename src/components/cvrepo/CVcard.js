import React, { useState } from "react";
import './cvcard.css';

const CVcard = ({
  blog: { title, name_, dept, category, cover, company, profilecolor },
  index,
  blogs,
}) => {
  const [dialog, setDialog] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(index);
  const [coverImage, setCoverImage] = useState(cover);
  const [name, setName] = useState(company);
  const [dept_, setDept] = useState(dept);
  const [category_, setCategory] = useState(category);
  const toggleDialog = () => {
    setDialog(!dialog);
    console.log(currentIndex);
    setCurrentIndex(index);
    setCoverImage(cover);
    setName(company);
    setDept(dept);
    setCategory(category);
    
  };

  const nextCard = () => {
    setCurrentIndex((currentIndex + 1) % blogs.length);
    setCoverImage(blogs[(currentIndex + 1) % blogs.length].cover);
    console.log((currentIndex + 1) % blogs.length);
    setName(blogs[(currentIndex + 1) % blogs.length].company);
    setDept(blogs[(currentIndex + 1) % blogs.length].dept);
    setCategory(blogs[(currentIndex + 1) % blogs.length].category);

  };

  const prevCard = () => {
    setCurrentIndex((currentIndex - 1 + blogs.length) % blogs.length);
    setCoverImage(blogs[(currentIndex - 1 + blogs.length) % blogs.length].cover);
    console.log((currentIndex - 1 + blogs.length) % blogs.length);
    setName(blogs[(currentIndex - 1 + blogs.length) % blogs.length].company);
    setDept(blogs[(currentIndex - 1 + blogs.length) % blogs.length].dept);
    setCategory(blogs[(currentIndex - 1 + blogs.length) % blogs.length].category);
  };

  return (
    <div className="blogItem-wrap rev cvcontainer">
      <div className={`cvbox ${category}2`}>
        <img
          src={cover}
          alt="blog"
          className={`cvimage ${category}2`}
          onClick={toggleDialog}
        />
        
      </div>
      <div className={`overlay ${category}`} onClick={toggleDialog}>
        <h3 className="cvtext">{company}</h3>
      </div>
      {dialog && (
        <div className="dialog">
          <button onClick={prevCard} className="arrow-button left">
          &#9001;
            </button>
          <div className={`dialog-content ${category_}2`}>
            <button onClick={toggleDialog} className="close-icon">
              &times;
            </button>
            
            
            <ImageModal cover={coverImage} currentIndex={currentIndex} name={name} dept_={dept_}/>
            
          </div>
          <button onClick={nextCard} className="arrow-button right">
              &#9002;
          </button>
        </div>
      )}
    </div>
  );
};

const ImageModal = ({ cover, currentIndex,name,dept_}) => {
  return (
    <div className="image-modal">
      <div className="cvname">
          <h3>
            {name} | {dept_}
          </h3>
        </div>
      <img src={cover} alt="Popup Image"/>
    </div>
  );
};

export default CVcard;
