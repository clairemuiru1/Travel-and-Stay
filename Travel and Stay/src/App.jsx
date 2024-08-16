// import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import Popular from "./components/popular/Popular";
import Offers from "./components/offers/Offers";
import About from "./components/about/About";
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Popular/>
      <Offers/>
      <About/>
      <Blog/>
    </>
  );
}

export default App;
