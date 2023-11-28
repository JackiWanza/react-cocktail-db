import React from "react";
import "./search.css";

const Search = ({ search, handleChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="search your favorite cocktail"
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
};

export default Search;
