// import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
// import Blog from "./components/blog/Blog";
import Popular from "./components/popular/Popular";
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Popular/>
      {/* <Blog/> */}
    </>
  );
}

export default App;
