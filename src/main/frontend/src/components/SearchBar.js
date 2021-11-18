import React from 'react';
import search from '../assets/search.svg'
import "../components/search.css";
const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <div class="container">
    <img src={search} class="image"></img>
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search question..."}
     // onChange={(e) => setKeyword(e.target.value)}
    />
   </div> 
  );
}

export default SearchBar