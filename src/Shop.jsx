import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./normalize.css";
import "./style.css";
import Mc320 from "./assets/images/mc_320.jpg";
import Mc512 from "./assets/images/mc_512.jpg";
import Cd320 from "./assets/images/cd_320.jpg";
import Cd512 from "./assets/images/cd_512.jpg";
import Lp320 from "./assets/images/lp_320.jpg";
import Lp512 from "./assets/images/lp_512.jpg";

function Carousel() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [article, setArticle] = useState(2);

  async function startNewInterval(msec) {
    await new Promise((resolve) => setTimeout(resolve, msec));
    if (article < 2) {
      setArticle(article + 1);
    } else {
      setArticle(0);
    }
  }

  useEffect(() => {
    startNewInterval(8000);
  }, [article]);

  return (
    <div className="carousel" ref={ref}>
      <div
        className={
          article === 0 ? "article-card visible" : "article-card invisible"
        }
      >
        <img
          srcSet={`${Cd320} 320w, ${Cd512} 512w`}
          alt="Picture of Album on MC"
          className="mc-img"
        />
        <p className="article-name">MC</p>
        <p className="article-description">Beschreibung</p>
      </div>
      <div
        className={
          article === 1 ? "article-card visible" : "article-card invisible"
        }
      >
        <img
          srcSet={`${Mc320} 320w, ${Mc512} 512w`}
          alt="Picture of Album on MC"
          className="mc-img"
        />
        <p className="article-name">MC</p>
        <p className="article-description">Beschreibung</p>
      </div>
      <div
        className={
          article === 2 ? "article-card visible" : "article-card invisible"
        }
      >
        <img
          srcSet={`${Lp320} 320w, ${Lp512} 512w`}
          alt="Picture of Album on MC"
          className="mc-img"
        />
        <p className="article-name">MC</p>
        <p className="article-description">Beschreibung</p>
      </div>
    </div>
  );
}

function Shop() {
  return (
    <>
      <div>
        <div className="shop-headline">
          <h2>Commercial Nilpfred</h2>
          <p>
            Anzuhören gibt es den T-Rex analog auf CD und MC. Oder digital als
            Fake-LP und auf den üblichen Kanälen.
          </p>
        </div>
        <Carousel />
        <div>
          <p>Diese Seite befindet sich noch im Aufbau.</p>
        </div>
      </div>
    </>
  );
}

export default Shop;
