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
  const { ref1, inView1 } = useInView({ threshold: 0 });
  const { ref2, inView2 } = useInView({ threshold: 0 });
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    if (inView1) setActiveSection(1);
    if (inView2) setActiveSection(2);
  }, [inView1, inView2]);

  const ref = useRef(null);
  const noRef = useRef(null);

  function NextPage() {
    const handleClick = () => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
      console.log(activeSection);
    };

    return (
      <button className="nextPage" onClick={handleClick}>
        <img src={ArrowDown} alt="Arrow Down" className="arrow-down" />
      </button>
    );
  }

  return (
    <>
      <Nav />
      <NextPage />
      <section
        className="hero-container"
        ref={activeSection === 2 ? { ref, ref1 } : { ref1 }}
      >
        <Hero />
      </section>

      <section
        className="info-container"
        ref={activeSection === 1 ? { ref, ref2 } : { ref2 }}
      >
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
