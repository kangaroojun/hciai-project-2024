import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import ReviewEntry from './views/ReviewEntry';
import FlowerEncyclopedia from './views/FlowerEncyclopedia';
import JournalEntry from './views/JournalEntry';
import Header from './components/header/Header'; // Corrected path
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/review-entry" element={<ReviewEntry />} />
          <Route path="/flower-encyclopedia" element={<FlowerEncyclopedia />} />
          <Route path="/journal-entry" element={<JournalEntry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
