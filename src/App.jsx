import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Cart />
      <Footer />
    </>
  );
}

export default App;
