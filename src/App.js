import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import GridBackground from './components/GridBackground';
import Chatbot from "./components/chatbot/Chatbot"; 


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GridBackground />
        <div className="content">
          <TopNav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Chatbot/>
        </div>
        <footer className="text-center py-6 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Loel Campaña. All rights reserved.
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

