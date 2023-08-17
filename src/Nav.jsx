import "./normalize.css";
import "./style.css";
import Home from "./assets/icons/home_white.svg";
import Music from "./assets/icons/music_white.svg";
import Dollar from "./assets/icons/dollar_white.svg";
import Facebook from "./assets/icons/facebook_white.svg";
import Instagram from "./assets/icons/instagram_white.svg";
import Youtube from "./assets/icons/youtube_white.svg";

function Nav() {
  return (
    <nav>
      <h3>Commander Nilpfred</h3>
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
      <a href="https://www.facebook.com/nilpfred">
        <img src={Facebook} alt="Facebook icon" width="32px" className="facebook-icon" />
      </a>
      <a href="https://www.instagram.com/commander_nilpfred/">
        <img src={Instagram} alt="Instagram icon" width="32px" className="instagram-icon" />
      </a>
      <a href="https://www.youtube.com/results?search_query=commander+nilpfred">
        <img src={Youtube} alt="Youtube icon" width="32px" className="youtube-icon" />
      </a>
    </nav>
  );
}

export default Nav;
