import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import App from './App'; // Import the App component
import './main.css'; // Import your CSS file
import Cake from './cake'; // Import the Cake component
import Crossword from './crossword'; // Import the Crossword component

var imgBotMargin = "40px";

function HomePage() {
    const navigate = useNavigate();

    

    return (
    <div 
    style={{
    textAlign: 'center',
    marginTop: '0px',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',
    background: 'linear-gradient(to bottom, #ffefba, #ffffff)', // Gradient background
    minHeight: '100vh', // Full page height
    padding: '20px',
    }}
    >
        <h1
        style={{
            fontSize: '3em',
            color: '#ff6347', // Tomato color
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Text shadow
            marginBottom: '20px',
        }}
        >HAPPY BIRTHDAY DORIS!</h1>

        <div>
        
            <img
            src="https://media1.tenor.com/m/UTrLSr85tYEAAAAd/happy-cat-cat.gif"
            alt="Happy Cat"
            style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                marginBottom: imgBotMargin,
                padding: '5px 30px'
            }}
            >
            </img>

            <img
            src="https://media1.tenor.com/m/5XwIe-swD4cAAAAd/cat-kiss.gif"
            alt="Dorowo Cat"
            style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                marginBottom: imgBotMargin,
                padding: '5px 30px'
            }}
            >
            </img>
            <img
            src="https://media1.tenor.com/m/47qpxBq_Tw0AAAAd/cat-cat-meme.gif"
            alt="Sleepy cat"
            style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                marginBottom: imgBotMargin,
                padding: '5px 30px'
            }}
            >
                
            </img>

            <img
            src="https://media1.tenor.com/m/YovRlI1mFJsAAAAd/cat-headphones.gif"
            alt="Music cat"
            style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                marginBottom: imgBotMargin,
                padding: '5px 30px'
            }}
            >
                
            </img>

            

        </div>
        <button
        className="app-button"
        onClick={() => navigate('/app')} // Navigate to the App page
        >
        meow meow meow
        </button>

        <button
        className="cake-button"
        onClick={() => navigate('/cake')} // Navigate to the App page
        >
        cakey
        </button>
        <button
        className="crossword-button"
        onClick={() => navigate('/crossword')} // Navigate to the App page
        >
        Wordy Word
        </button>
        </div>
    );
}

function Main() {
    return (
    <Router>
        <Routes>
        {/* Define the routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<App />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/crossword" element={<Crossword/>} />
        
        </Routes>
    </Router>
    );
}

export default Main;