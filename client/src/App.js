import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import DailyBibleVerse from './components/DailyBibleVerse/DailyBibleVerse';
import SongsApp from './components/SongsApp/SongsApp';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-bible-verse" element={<DailyBibleVerse />} />
        <Route path="/songsapp" element={<SongsApp />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
