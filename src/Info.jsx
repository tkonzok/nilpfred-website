import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./normalize.css";
import "./style.css";
import Bandinfo from "./assets/bandinfo.pdf";
import Bernd200 from "./assets/images/bernd_200.jpg";
import Bernd100 from "./assets/images/bernd_100.jpg";
import Felix200 from "./assets/images/felix_200.jpg";
import Felix100 from "./assets/images/felix_100.jpg";
import Jasper200 from "./assets/images/jasper_200.jpg";
import Jasper100 from "./assets/images/jasper_100.jpg";
import Tobi200 from "./assets/images/tobi_200.jpg";
import Tobi100 from "./assets/images/tobi_100.jpg";

function CardContainer() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      className={
        inView ? "card-container slide-in from-left delay1" : "card-container"
      }
      ref={ref}
    >
      <div className={inView ? "card slide-in from-right delay2" : "card"}>
        <img
          srcSet={`${Bernd100} 100w, ${Bernd200} 200w`}
          alt="Picture of Bernd"
        ></img>
        <p>Bernd</p>
        <p className="instruments">(Gesang und Bass)</p>
      </div>
      <div className={inView ? "card slide-in from-right delay3" : "card"}>
        <img
          srcSet={`${Jasper100} 100w, ${Jasper200} 200w`}
          alt="Picture of Jasper"
        ></img>
        <p>Jasper</p>
        <p className="instruments">(Schlagzeug und Gesang)</p>
      </div>
      <div className={inView ? "card slide-in from-right delay3" : "card"}>
        <img
          srcSet={`${Tobi100} 100w, ${Tobi200} 200w`}
          alt="Picture of Tobi"
        ></img>
        <p>Tobi</p>
        <p className="instruments">(Akustikgitarre und Gesang)</p>
      </div>
      <div className={inView ? "card slide-in from-right delay4" : "card"}>
        <img
          srcSet={`${Felix100} 100w, ${Felix200} 200w`}
          alt="Picture of Felix"
        ></img>
        <p>Felix</p>
        <p className="instruments">(E-Gitarre und Gesang)</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <>
      <div className="info">
        <div>
          <h2>Commander Who?</h2>
          <p>
            Der Commander macht Powerpoppunkrock (also wohl eher Punkpop als
            Poppunk) mit Akustikgitarre. Auf deutsch. Seit 2016. Deutlich
            flotter als man das von einem Nilpfred vermuten würde. Die Commander
            sind:
          </p>
        </div>
        <div className="card-container-wrapper">
          <CardContainer />
        </div>
        <div>
          <p>
            Immer gut gelaunt, aber nicht in der Lage, schlüssig zu erklären,{" "}
            <em>"was der Scheißname bedeutet."</em>
          </p>
          <p>Mehr steht in der</p>
          <a href={Bandinfo} className="bandinfo-pdf">
            einigermaßen aktuellen Bandinfo (PDF)
          </a>
        </div>
      </div>
    </>
  );
}

export default Info;
