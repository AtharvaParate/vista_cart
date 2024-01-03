import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

export const SearchBar = () => {
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input className="input" placeholder="Search for the product here" />
    </div>
  );
};
