import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import thud from './thud.mp3'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomePage from './main'

function route() {
    return (
    <Router>
        <Routes>
        {/* Define the routes */}
        <Route path="/" element={<HomePage />} />
        
        </Routes>
    </Router>
    );
}

function App() {

  const navigate = useNavigate();
  const [position, setPosition] = useState({ top: 100, left: 100 });

  const [size, setSize] = useState(100);

  const [font, setFont] = useState(20);

  const moveButton = () => {
  const maxTop = window.innerHeight - size;
  const maxLeft = window.innerWidth - size;

  const randomTop = Math.floor(Math.random() * maxTop);
  const randomLeft = Math.floor(Math.random() * maxLeft);

  const newPosition = { top: randomTop, left: randomLeft };
  setPosition(newPosition);

  // Trigger confetti at the new position
  triggerConfetti(newPosition);
};

function meow(){
  const sound = new Audio(thud);
  sound.play();
}

const triggerConfetti = (newPosition) => {
  confetti({
    particleCount: 70,
    spread: 80,
    origin: {
      x: newPosition.left / window.innerWidth, // Normalize left position
      y: newPosition.top / window.innerHeight, // Normalize top position
    },
  });
};

  const enlargeButton = () => {
    setSize((prevSize) => prevSize * 1.05);
  }

  const enlargeFont = () => {
    setFont((prevFont) => prevFont * 1.05);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className='MovingButton'
          onClick={() => {
            moveButton();
            //enlargeButton();
            //enlargeFont();
            meow();
          }}
          style={{
            position: 'absolute',
            top: `${position.top}px`,
            left: `${position.left}px`,
            backgroundColor: 'pink',
            border: 'none',
            borderRadius: '50%',
            width: `${size}px`,
            height: `${size}px`,
            fontSize: `${font}px`,
            cursor: 'pointer',
          }}>
          Happy Birthday Doris!
        </button>
        <button 
          className='HomeButtonApp'
          onClick = {() => navigate("/")}
          >
            Home
        </button>

      </header>
      
    </div>
  );
}

export default App;
