import React from "react";
import "./search.css";

const Search = ({ search, handleChange, setCocktails }) => {
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
      <button
        onClick={() => {
          fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
          )
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              setCocktails(json.drinks)
            });
        }}
      >
        search
      </button>
    </div>
  );
};

export default Search;
