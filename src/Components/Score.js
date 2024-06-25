import React from 'react';
import '../App.css';

const Score = ({ score, onReset }) => {
    return (
        <div>
            <h2>Results</h2>
            <h4>Your score: {score}</h4>
            <button onClick={onReset} className="btn btn-primary mt-2">
                RESET
            </button>
        </div>
    );
};

export default Score;
