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
  const { ref, inView } = useInView({ threshold: 0.5 });

  function Arrow() {
    const handleClick = () => {
      console.log(inView);
      const firstPage = document.querySelector(".hero-container");
      const secondPage = document.querySelector(".info");
      if (inView) {
        secondPage.scrollIntoView({ behavior: "smooth" });
      } else {
        firstPage.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <button className="next-page" onClick={handleClick}>
        <img
          src={ArrowDown}
          alt="Arrow"
          className={inView ? "arrow-down" : "arrow-up"}
        />
      </button>
    );
  }

  return (
    <>
      <Nav />
      <Arrow />
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
    </>
  );
}

export default App;
