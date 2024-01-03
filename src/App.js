// import "./App.css";
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import HeroComponent from "./components/HeroComponent";
import SearchBox, { SearchBar } from "./components/SearchBar";
import SearchSuffix from "./components/SearchSuffix";
// import { Routes } from "./components/Routes";
// import { Footer } from "./components/Footer";

const App = () => {
  // const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      <Navbar />;
      <HeroComponent />
      <SearchBar />
      <SearchSuffix />
    </>
  );
};

export default App;
