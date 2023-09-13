import { useState } from "react";
import SearchBtn from "../assets/search.svg";

function SearchLocation() {

  const [search, setSearch] = useState('')


  return (
    <form className="search-form" >
      <button className="search-btn">
        <img src={SearchBtn} alt="" />
      </button>
      <input
        type="text"
        placeholder="Enter the cities"
        className="search-input"
        
      />
    </form>
  );
}

export default SearchLocation;
