import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomePage from './main';
import './cake.css'

const initialGrid = [
  [{ letter: '', answer: 'V' , number: 1}, { letter: '', answer: 'I', number: 2}, { letter: '', answer: 'P', number: 3 }, { letter: '', answer: 'E', number: 4}, { letter: '', answer: 'R', number: 5 }],
  [{ letter: '', answer: ''}, { letter: '', answer: 'N', number: 6 }, { letter: '', answer: 'O' }, { letter: '', answer: 'A' }, { letter: '', answer: 'H' }],
  [{ letter: '', answer: 'E', number: 7}, { letter: '', answer: 'D', number: 0 }, { letter: '', answer: '' }, { letter: '', answer: '' }, { letter: '', answer: 'I' }],
  [{ letter: '', answer: ''}, { letter: '', answer: 'I', number: 8 }, { letter: '', answer: 'R', number: 10 }, { letter: '', answer: 'O', number: 11 }, { letter: '', answer: 'N' }],
  [{ letter: '', answer: 'M', number: 9}, { letter: '', answer: 'A', number: 0 }, { letter: '', answer: 'N' }, { letter: '', answer: 'G' }, { letter: '', answer: 'O' }],
  
];

const clues = [
  { number: 1, direction: 'Across', clue: 'American Controller Agent from Valorant', row: 0, col: 0, length: 5 },
  { number: 2, direction: 'Down', clue: 'Alex\'s favourite country', row: 0, col: 1, length: 5 },
  { number: 3, direction: 'Down', clue: 'Animated Chracter Alex couldn\t get', row: 0, col: 2, length: 2 },
  { number: 4, direction: 'Down', clue: 'Developper of the Sims', row: 0, col: 3, length: 2 },
  { number: 5, direction: 'Down', clue: 'Large African Mammal', row: 0, col: 4, length: 5 },
  { number: 6, direction: 'Across', clue: 'Pookie', row: 1, col: 1, length: 4 },
  { number: 7, direction: 'Across', clue: '_ Snowy', row: 2, col: 0, length: 2 },
  { number: 8, direction: 'Across', clue: 'Used to craft smithing tables in Minecraft', row: 3, col: 1, length: 4 },
  { number: 9, direction: 'Across', clue: '_ Yummy', row: 4, col: 0, length: 5 },
  { number: 10, direction: 'Down', clue: 'Immediately', row: 3, col: 2, length: 2 },
  { number: 11, direction: 'Down', clue: 'Original   ', row: 3, col: 3, length: 2 },
];

let numCorrectAnswers = 25;

function Crossword() {
    const navigate = useNavigate();
    const [grid, setGrid] = useState(initialGrid);
    const [showCorrect, setShowCorrect] = useState(false);
    const [curPos, setCurPos] = useState({ row: 0, col: 0 });

    const updateCurPos = (row, col) => {
    setCurPos({ row, col });
    }

    const handleChange = (row, col, value) => {
    if (value.length > 1) return;
    const newGrid = grid.map(r => r.map(cell => ({ ...cell })));
    newGrid[row][col].letter = value.toUpperCase();
    setGrid(newGrid);
    };

    useEffect(() => {
        let correctCount = 0;
        for(let r = 0; r < grid.length; r++) {
            for(let c = 0; c < grid[r].length; c++) {
                if(grid[r][c].letter.toUpperCase() === grid[r][c].answer) {
                    correctCount++;
                }
            }
        }
        if(correctCount === numCorrectAnswers) {
            setTimeout(() => {
                alert("Congratulations! You solved the crossword!");
            }, 100);
        }
    }) 

  return (
    <div style={{ 
      textAlign: 'center', 
      background: 'linear-gradient(to bottom,rgb(74, 38, 87), #fff)', 
      minHeight: '100vh', 
      padding: '20px' 
    }}>
      <h2>Dorowo Mini</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '60px', // space between grid and clues
        margin: '40px auto 0 auto',
        width: 'fit-content'
      }}>
        {/* Crossword grid */}
        <div>
          {grid.map((row, rIdx) => (
            <div key={rIdx} style={{ display: 'flex' }}>
              {row.map((cell, cIdx) => (
                <div
                  key={cIdx}
                  style={{
                    position: 'relative',
                    width: 50,
                    height: 50,
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                  }}
                  onClick={() => updateCurPos(rIdx, cIdx)}
                >
                  {cell.number > 0 && (
                    <span
                      style={{
                        position: 'absolute',
                        top: 2,
                        left: 4,
                        fontSize: 10,
                        color: '#333',
                        fontWeight: 'bold',
                        pointerEvents: 'none',
                        zIndex: 2,
                      }}
                    >
                      {cell.number}
                    </span>
                  )}
                  {cell.answer ? (
                    <input
                      type="text"
                      maxLength={1}
                      value={cell.letter}
                      onChange={e => handleChange(rIdx, cIdx, e.target.value)}
                      style={{
                        width: 50,
                        height: 50,
                        textAlign: 'center',
                        fontSize: 24,
                        margin: 0,
                        padding: 0,
                        background: 'white',
                        border: 'gray 0.1px solid',
                        boxSizing: 'border-box',
                        outline: 'none',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        margin: 0,
                        padding: 0,
                        background: 'black',
                        border: 'gray 0.1px solid',
                        boxSizing: 'border-box',
                        outline: 'none',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Clues */}
        <div style={{ textAlign: 'left', minWidth: 320 }}>
          <b style={{ fontSize: 20 }}>Clues:</b>
          <ul style={{ paddingLeft: 20 }}>
            {clues.map(clue => (
              <li key={clue.number} style={{ marginBottom: 8 }}>
                <b>{clue.number} {clue.direction}:</b> {clue.clue}
              </li>
            ))}
          </ul>
        </div>
      </div>
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

export default Crossword;