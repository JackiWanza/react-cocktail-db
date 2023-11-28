import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Cocktail from "./components/cocktails/Cocktail";
import { json } from "react-router";

const App = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    
  }, [search]);
  return (
    <div>
      <Header />
      <Search search={search} handleChange={handleChange} setCocktails={setCocktails}/>
      <Cocktail cocktails={cocktails}/>
    </div>
  );
};

export default App;
