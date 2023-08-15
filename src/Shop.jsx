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
import Knapp320 from "./assets/images/knapp_320.jpg";
import Knapp512 from "./assets/images/knapp_512.jpg";
import Heiter320 from "./assets/images/heiter_320.jpg";
import Heiter512 from "./assets/images/heiter_512.jpg";

function Carousel() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [article, setArticle] = useState(4);

  async function startNewInterval(msec) {
    await new Promise((resolve) => setTimeout(resolve, msec));
    if (article < 4) {
      setArticle(article + 1);
    } else {
      setArticle(0);
    }
  }

  useEffect(() => {
    startNewInterval(8000);
  }, [article, inView]);

  return (
    <div className="carousel" ref={ref}>
      <div
        className={
          article === 0 ? "article-card visible" : "article-card invisible"
        }
      >
        <img
          srcSet={`${Cd320} 320w, ${Cd512} 512w`}
          alt="Picture of Album on CD"
          className="cd-img"
        />
        <p className="article-name">
          Tyrannopotomatische Compact Disc + Digitales Album
        </p>
      </div>
      <p
        className={
          article === 0
            ? "article-description visible"
            : "article-description invisible"
        }
      >
        Old school as old school can! Mit 16-seitigem, voll farbigem Booklet.
        Voller toller Infos und nicer Illus und Fotos und mit allen Texten zum
        Mitlesen, einstudieren und mitsingen!
      </p>
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
        <p className="article-name">Limitierte Kassette + Digitales Album</p>
      </div>
      <p
        className={
          article === 1
            ? "article-description visible"
            : "article-description invisible"
        }
      >
        Alles DIY, soviel Gebastel.... Es ist alles für Dich vorbereitet, nur
        Spulen musst Du selbst!
      </p>
      <div
        className={
          article === 2 ? "article-card visible" : "article-card invisible"
        }
      >
        <img
          srcSet={`${Lp320} 320w, ${Lp512} 512w`}
          alt="Picture of Album on LP"
          className="lp-img"
        />
        <p className="article-name">Fake Platte + Digitales Album</p>
      </div>
      <p
        className={
          article === 2
            ? "article-description visible"
            : "article-description invisible"
        }
      >
        Sieht aus wie eine LP, mit tollem Cover und allem Pipapo. Sieht
        spitzenmäßig aus im Plattenschrank. Ist auch Vinyl drin, aber kein
        Tyrannopotamus Rex drauf. Nur für Poser. Aber das richtig!
      </p>
      <div
        className={
          article === 3 ? "article-card visible" : "article-card invisible"
        }
      >
        <img
          srcSet={`${Knapp320} 320w, ${Knapp512} 512w`}
          alt="Cover EP Knapp"
          className="knapp-img"
        />
        <p className="article-name">Knapp (EP)</p>
      </div>
      <p
        className={
          article === 3
            ? "article-description visible"
            : "article-description invisible"
        }
      >
        Die zweite Single "Knapp" als Special Edition. Enthält unbegrenztes
        Streaming über die kostenlose Bandcamp-App und außerdem den hochwertigen
        Download als MP3, FLAC und mehr.
      </p>
      <div
        className={
          article === 4 ? "article-card visible" : "article-card invisible"
        }
      >
        <img
          srcSet={`${Heiter320} 320w, ${Heiter512} 512w`}
          alt="Cover Single Heiter"
          className="heiter-img"
        />
        <p className="article-name">Heiter (Single)</p>
      </div>
      <p
        className={
          article === 4
            ? "article-description visible"
            : "article-description invisible"
        }
      >
        Des Commanders erste Single "Heiter". Enthält unbegrenztes Streaming
        über die kostenlose Bandcamp-App und außerdem den hochwertigen Download
        als MP3, FLAC und mehr.
      </p>
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
          <p>All den Nilpfred Merch und noch viel mehr gibt's in unserem:</p>
          <a href="https://stereola.bandcamp.com/" className="shop-link">
            SHOP
          </a>
        </div>
      </div>
    </>
  );
}

export default Shop;
