import React from 'react';
import './Home.css';
import Logo from "../../logo.png"
import bibleverse from "../../bibleverse.png"
import mobile from "../../mobile.png"


function Home() {
  return (
    <div className="Home">
      <section className="hero">
        <div class="hero-section">
          <div class="left-content">
            <h1>Welcome to <br></br>Our Holy Word Website</h1>
            <p>Discover inspiration, wisdom, and guidance through our collection of biblical teachings.</p>
            <a className="button" href="#bibleverse" >Explore Now</a>
          </div>
          <div class="right-content">
            <img src={Logo} />
          </div>
        </div>

      </section>
      <section className="section" id='bibleverse'>
        <div class="daily-verse-section">
          <div class="left-content">
            <h2>Daily Bible Verse</h2>
            <p>Here is your daily dose of inspiration from the Holy Scriptures.</p>
            <a className='button' href='/daily-bible-verse'>Read More</a>
          </div>
          <div class="right-content">
            
            <img src={bibleverse} alt="Bible Verse Image" />
          </div>
        </div>


      </section>
      <section className="section">
        <div class="songs-app-section">
          <div class="left-content">
            <h2>Get the Songs App</h2>
            <p>Download our Songs App to enjoy music on the go. Access songs, Add to Favorite, and much more.</p>
            <a href="/songsapp" class="button">Download Now</a>
          </div>
          <div class="right-content">
            <img src={mobile} alt="Songs App Image" />
          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;
