import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./normalize.css";
import "./style.css";
import BandImg320 from "./assets/images/band-img_320.jpg";
import BandImg512 from "./assets/images/band-img_512.jpg";
import BandImg768 from "./assets/images/band-img_768.jpg";
import BandImg1024 from "./assets/images/band-img_1024.jpg";
import BandImg2048 from "./assets/images/band-img_2048.jpg";
import Dollar from "./assets/icons/dollar.svg";
import Music from "./assets/icons/music.svg";
import Facebook from "./assets/icons/facebook.svg";
import Instagram from "./assets/icons/instagram.svg";
import Youtube from "./assets/icons/youtube.svg";
import ArrowDown from "./assets/icons/arrow-down.svg";

function BandImage() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <img
      ref={ref}
      srcSet={`${BandImg320} 320w, ${BandImg512} 512w, ${BandImg768} 768w, ${BandImg1024} 1024w, ${BandImg2048} 2048w`}
      alt="Band Picture"
      className={inView ? "band-img slide-in from-right delay1" : "band-img"}
    />
  );
}

function Links() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="links" ref={ref}>
      <a
        href="https://stereola.bandcamp.com/"
        className={inView ? "slide-in from-left delay6" : ""}
      >
        <img src={Dollar} alt="Shop icon" className="shop" />
      </a>
      <a
        href="https://open.spotify.com/intl-de/album/1Ecu1ss9rh6ZbYVXcTqz6H"
        className={inView ? "slide-in from-left delay5" : ""}
      >
        <img src={Music} alt="Music icon" className="music" />
      </a>
      <a
        href="https://www.facebook.com/nilpfred"
        className={inView ? "slide-in from-left delay4" : ""}
      >
        <img src={Facebook} alt="Facebook icon" className="facebook" />
      </a>
      <a
        href="https://www.instagram.com/commander_nilpfred/"
        className={inView ? "slide-in from-left delay3" : ""}
      >
        <img src={Instagram} alt="Instagram icon" className="instagram" />
      </a>
      <a
        href="https://www.youtube.com/results?search_query=commander+nilpfred"
        className={inView ? "slide-in from-left delay2" : ""}
      >
        <img src={Youtube} alt="YouTube icon" className="youtube" />
      </a>
    </div>
  );
}

function Quotes() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [quote, setQuote] = useState(5);

  async function startNewInterval(msec) {
    await new Promise((resolve) => setTimeout(resolve, msec));
    if (quote < 4) {
      setQuote(quote + 1);
    } else {
      setQuote(0);
    }
  }

  useEffect(() => {
    startNewInterval(8000);
  }, [quote, inView]);

  return (
    <div
      ref={ref}
      className={inView ? "quotes slide-in from-bottom delay7" : "quotes"}
    >
      <div className={quote === 0 ? "quote visible" : "quote invisible"}>
        <em>
          „ ...unterhaltsame, wirklich lustige, nicht zu alberne poppige
          Punkmusik mit genau der Menge Indie, dass es trotzdem noch als Punk
          durchgeht.“
        </em>
        <p>(bierschinken.net)</p>
      </div>
      <div className={quote === 1 ? "quote visible" : "quote invisible"}>
        <em>
          „Wo gab es schon mal eine Band die [...] KOTZREIZ, MUFF POTTER,
          BOXHAMSTERS, TERRORGRUPPE und DIE ÄRZTE miteinander kombiniert hätte?”
        </em>
        <p>(ox #162)</p>
      </div>
      <div className={quote === 2 ? "quote visible" : "quote invisible"}>
        <em>„Überraschend ausgereift“</em>
        <p>(Brot-Magazin #7)</p>
      </div>
      <div className={quote === 3 ? "quote visible" : "quote invisible"}>
        <em>
          „Commander Nilpfred. Ja, die heißen wirklich Nil-PFRED. Fick das
          System. Super Song.”
        </em>
        <p>(Olli Schulz, Fest & Flauschig, "Der Asi und der Schwabe")</p>
      </div>
      <div className={quote === 4 ? "quote visible" : "quote invisible"}>
        <em>
          „Die beigemischte Akustikgitarre hebt das Gute-Laune-Level und sorgt
          für zusätzlichen Schwung.”
        </em>
        <p>(blueprint-fanzine)</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="band-img-container-wrap">
          <div className="band-img-container">
            <BandImage />
          </div>
        </div>
        <div className="logo"></div>
        <div className="links-container">
          <Links />
        </div>
        <div className="quotes-container">
          <Quotes />
        </div>
      </div>
    </>
  );
}

export default Hero;
