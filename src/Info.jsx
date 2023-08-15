import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./normalize.css";
import "./style.css";
import Bandinfo from "./assets/bandinfo.pdf";

function Info() {
  return (
    <>
      <div className="info">
        <h2>Commander Who?</h2>
        <p>
          Der Commander macht Powerpoppunkrock (also wohl eher Punkpop als
          Poppunk) mit Akustikgitarre. Auf deutsch. Seit 2016. Deutlich flotter
          als man das von einem Nilpfred vermuten würde. Die Commander (vlnr)
          sind:
        </p>
        <ul>
          <li>Jasper (Schlagzeug und Gesang)</li>
          <li>Tobi (Akustikgitarre und Gesang)</li>
          <li>Bernd (Gesang und Bass)</li>
          <li>Felix (E-Gitarre und Gesang)</li>
        </ul>
        <p>
          immer gut gelaunt, aber nicht in der Lage, schlüssig zu erklären,{" "}
          <em>"was der Scheißname bedeutet."</em>
        </p>
        <p>Mehr steht in der</p>
        <a href={Bandinfo} className="bandinfo-pdf">
          einigermaßen aktuellen Bandinfo (PDF)
        </a>
      </div>
    </>
  );
}

export default Info;
