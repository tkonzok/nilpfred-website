import { useState } from "react";
import "./style.css";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";

function App() {
  return (
    <>
      <Nav />
      <section className="hero-container">
        <Hero />
      </section>
    </>
  );
}

export default App;
