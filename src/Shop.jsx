import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./normalize.css";
import "./style.css";
import Mc512 from "./assets/images/mc_512.jpg";

function SlidingIn() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <img
      ref={ref}
      src={Mc512}
      alt="Picture of Album on MC"
      className={inView ? "mc-img slide-in from-right" : "mc-img"}
    />
  );
}

function Shop() {
  return (
    <div>
      <h2>Commercial Nilpfred</h2>
      <p>
        Anzuhören gibt es den T-Rex analog auf CD und MC. Oder digital als
        Fake-LP und auf den üblichen Kanälen.
      </p>
      <SlidingIn />
      <p>Diese Seite befindet sich noch im Aufbau.</p>
    </div>
  );
}

export default Shop;
