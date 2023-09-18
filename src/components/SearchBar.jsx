import { useState } from "react";
import SearchBtn from "../assets/search.svg";

function SearchLocation({ SearchCity }) {
  const [search, setSearch] = useState("");


  const handleChange = (e) => {
    setSearch(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    SearchCity(search);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <button className="search-btn">
        <img src={SearchBtn} alt="" type="submit"/>
      </button>
      <input
        type="text"
        placeholder="Enter the cities"
        className="search-input"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchLocation;
