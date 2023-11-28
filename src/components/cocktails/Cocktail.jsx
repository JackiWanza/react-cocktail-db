import React from "react";
import "./cocktail.css";
import { Link } from "react-router-dom";

const Cocktail = ({ cocktails }) => {
  return (
    <ul className="cocktails">
      {cocktails && cocktails.map((cocktail) => {
        return <li key={cocktail.idDrink}>
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p>{cocktail.strCategory}</p>
        </li>;
      })}
    </ul>
  );
};

export default Cocktail;
