import "./normalize.css";
import "./style.css";
import Home from "./assets/icons/home.svg";
import Music from "./assets/icons/music.svg";
import Dollar from "./assets/icons/dollar.svg";
import ArrowUp from "./assets/icons/arrow-up-bold-circle.svg";

function BackToTop() {
  function backToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <button onClick={backToTop}>
      <img
        src={ArrowUp}
        alt="Back to Top"
        width="48px"
        className="arrow-up-icon"
      />
    </button>
  );
}

function Nav() {
  return (
    <nav>
      <h2>Commander Nilpfred</h2>
      <a href="https://nilpfred.de">
        <img src={Home} alt="Home icon" width="32px" className="home-icon" />
      </a>
      <a href="https://stereola.bandcamp.com/album/tyrannopotamus-rex-2">
        <img
          src={Dollar}
          alt="Dollar icon"
          width="32px"
          className="shop-icon"
        />
      </a>
      <a href="https://open.spotify.com/intl-de/album/1Ecu1ss9rh6ZbYVXcTqz6H">
        <img src={Music} alt="Music icon" width="32px" className="music-icon" />
      </a>
      {false && <BackToTop />}
    </nav>
  );
}

export default Nav;
