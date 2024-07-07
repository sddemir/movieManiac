import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "./components/MovieList/MovieList.jsx";
import MovieList from "./components/MovieList/MovieList.jsx";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList />
    </div>
  );
};

export default App;
