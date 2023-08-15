import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./normalize.css";
import "./style.css";
import Album512 from "./assets/images/album_512.png";

function SlidingInAlbum() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="album-img-container">
      <img
        ref={ref}
        src={Album512}
        alt="Album Picture"
        className={inView ? "album-img slide-in from-left" : "album-img"}
      />
    </div>
  );
}

function Music() {
  return (
    <div>
      <div>
        <h2>Tyrannopötamus Rex</h2>
        <p>
          Tyrannopötamus Rex ist das Debutalbum des Commanders auf STEREOLA.
          Geboren am 24. September 2021 mit einem Gewicht von 16 Titeln und
          einer Größe von 32:14 Minuten. Wegen der Pandemie und einer Reihe
          anderer, schwieriger Umstände war es eine relativ schwere Geburt.
          Bernd, Felix, Jasper und Tobi sind trotzdem sehr stolz auf ihren
          kleinen Racker!
        </p>
      </div>
      <div className="album-img-container-wrap">
        <SlidingInAlbum />
      </div>
      <div>
        <p>
          Anzuhören gibt es den T-Rex analog auf CD und MC. Oder digital als
          Fake-LP und auf den üblichen Kanälen. Z.B. hier:
        </p>
        <iframe
          width="100%"
          height="52"
          src="https://odesli.co/embed/?url=https%3A%2F%2Falbum.link%2Fi%2F1587016663&amp;theme=light"
        ></iframe>
      </div>
    </div>
  );
}

export default Music;
