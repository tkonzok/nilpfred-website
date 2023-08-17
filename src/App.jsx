import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./style.css";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Info from "./Info.jsx";
import Music from "./Music.jsx";
import Shop from "./Shop.jsx";
import Contact from "./Contact.jsx";
import ArrowDown from "./assets/icons/arrow-down.svg";

function App() {
  const { ref, inView } = useInView({ threshold: 0.9, delay: 1000 });

  function Arrow() {
    const handleClick = () => {
      const firstPage = document.querySelector(".hero-container");
      firstPage.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <button
        className={inView ? "arrow-up not-shown" : "arrow-up shown"}
        onClick={handleClick}
      >
        <img src={ArrowDown} alt="Arrow" />
      </button>
    );
  }

  return (
    <>
      <Nav />
      <section className="hero-container" ref={ref}>
        <Hero />
      </section>

      <section className="info-container">
        <Info />
      </section>

      <section className="music-container">
        <Music />
      </section>

      <section className="shop-container">
        <Shop />
      </section>

      <section className="contact-container">
        <Contact />
      </section>
      <Arrow />
    </>
  );
}

export default App;
