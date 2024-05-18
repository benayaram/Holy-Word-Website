
import React from 'react';
import './SongsApp.css';
import mobile from '../../mobile.png'
function SongsApp() {
  return (
    <div className="songs-app">
      <section className="hero-section">
        <div className="left-content">
          <h1>Download Our App</h1>
          <p>Experience the best Christian songs and hymns on the go.</p>
          <a href="https://www.zippyshare.cloud/1M5q/Holy_Word.apk?download_token=c692e5b1eba25ecde69f73c7218074241fa1857bce845c5f41ebd9ee46d70112" className="button" download>Download App</a>
        </div>
        <div className="right-content">
          <img src={mobile} alt="App Preview" />
        </div>
      </section>
      <section className="songs-section">
        <h2>Songs</h2>
        <p>Here you can find the Lyrics pf inspiring songs and Access songs, <br></br>  Add to Favorite, and much more</p>
      </section>
    </div>
  );
}

export default SongsApp;
