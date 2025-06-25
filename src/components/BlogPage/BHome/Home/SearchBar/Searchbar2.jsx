import React from "react";
import "./styles.css";

const SearchBar2 = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
    <div className='searchBar-wrap'>
      <form onSubmit={formSubmit}>
        <input
          type='text'
          placeholder='Enter 2 letter Dept Code'
          value={value}
          onChange={handleSearchKey}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <button>Go</button>
      </form>
    </div>
  );
  
  export default SearchBar2;