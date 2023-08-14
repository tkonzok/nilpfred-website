import { useState } from "react";
import "./style.css";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Info from "./Info.jsx";

function App() {
  return (
    <>
      <Nav />
      <section className="hero-container">
        <Hero />
      </section>

      <section className="info-container">
        <Info />
      </section>
    </>
  );
}

export default App;
