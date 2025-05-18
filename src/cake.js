import React, { useState } from 'react';
import blowSound from './blow.mp3';
import claps from './clap.mp4';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomePage from './main'
import './cake.css'

const NUM_CANDLES = 5;
const candleColors = ['#FFD700', '#FF69B4', '#87CEEB', '#ADFF2F', '#FFA500'];



function Cake() {
  const navigate = useNavigate();
  const [candles, setCandles] = useState(Array(NUM_CANDLES).fill(true));
  const [candleCount, setCandleCount] = useState(NUM_CANDLES);
  const audio = new Audio(blowSound);


  const blowCandle = (idx) => {
    if (!candles[idx]) return;
    const newCandles = [...candles];
    newCandles[idx] = false;
    setCandles(newCandles);
    audio.currentTime = 0;
    audio.play();
    setCandleCount(candleCount - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '00px', background: 'linear-gradient(to bottom,rgb(16, 74, 82), #fff)', minHeight: '100vh', padding: '100px' }}>
      <h2 style={{ fontFamily: 'cursive', color: '#ff69b4', fontSize: '70px', marginBottom: '100px' }}>
        🎂 Blow out the candles :{'<'}
      </h2>
      {candleCount === 0 && (
        <img
          src="https://media1.tenor.com/m/UTrLSr85tYEAAAAd/happy-cat-cat.gif"
          alt="Celebration"
          style={{ width: '300px', margin: '30px auto', display: 'block' }}
        />
        
      )}
      {candleCount === 0 && (
        <video
            src={claps}
            autoPlay = {true}
            style={{ width: '0px', margin: '30px auto', display: 'block' }}
        />
        )}
      {/* Candles */}
      <div
        style={{
          position: 'relative',
          height: '60px',           // Reduced height
          marginBottom: '-30px',   // Negative margin to overlap cake
          zIndex: 2,
        }}
      >
        {candles.map((lit, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-block',
              margin: '0 18px',
              position: 'relative',
              top: '0px',           // Remove or set to 0 to lower candles
              cursor: lit ? 'pointer' : 'default',
              opacity: lit ? 1 : 0.3,
              transition: 'opacity 0.3s',
              zIndex: 2,
            }}
            onClick={() => blowCandle(idx)}
            role="button"
            aria-label={lit ? "Blow out candle" : "Candle blown out"}
          >
            {/* Candle body */}
            <div style={{
              width: '12px',
              height: '38px',
              background: candleColors[idx % candleColors.length],
              borderRadius: '4px',
              margin: '0 auto',
              border: '1px solid #fff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
            }} />
            {/* Flame */}
            {lit && (
              <div style={{
                width: '0',
                height: '0',
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderBottom: '16px solid gold',
                margin: '0 auto',
                position: 'absolute',
                left: '50%',
                top: '-18px',
                transform: 'translateX(-50%)',
                animation: 'flicker 1s infinite alternate'
              }} />
            )}
          </div>
        ))}
        {/* Flicker animation */}
        <style>
          {`
            @keyframes flicker {
              0% { filter: brightness(1) drop-shadow(0 0 6px gold);}
              100% { filter: brightness(1.5) drop-shadow(0 0 12px orange);}
            }
          `}
        </style>
      </div>
      {/* Cake body */}
      <div style={{
        width: '340px',
        height: '110px',
        background: 'linear-gradient(to bottom, #ffb6c1 60%, #fff0f5 100%)',
        borderRadius: '0 0 80px 80px',
        margin: '0 auto',
        position: 'relative',
        boxShadow: '0 8px 24px rgba(0,0,0,0.18)'
      }}>
        {/* Cake layers */}
        <div style={{
          position: 'absolute',
          top: '30px',
          left: '0',
          width: '100%',
          height: '20px',
          background: 'linear-gradient(90deg, #fffacd 40%, #ffe4e1 60%)',
          borderRadius: '0 0 40px 40px',
        }} />
        <div style={{
          position: 'absolute',
          top: '60px',
          left: '0',
          width: '100%',
          height: '18px',
          background: 'linear-gradient(90deg, #ffe4e1 40%, #fffacd 60%)',
          borderRadius: '0 0 30px 30px',
        }} />
        {/* Cake emoji for fun */}
        
      </div>
      {/* Cake plate */}
      <div style={{
        width: '220px',
        height: '24px',
        background: 'linear-gradient(90deg, #e0e0e0 60%, #b0c4de 100%)',
        borderRadius: '0 0 40px 40px',
        margin: '0 auto',
        marginTop: '-10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
      }} />

      <button 
      className='HomeButton'
      onClick = {() => navigate("/")}
      >
        Home
      </button>
    </div>
  );
}

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

export default Cake;