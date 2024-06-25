import React from 'react';

const Options = ({ options, selectedOption, onOptionChange }) => {
    return (
        <div className='options'>
            {options.map((option, index) => (
                <div key={index} className="form-check">
                    <input
                        type="radio"
                        id={`option-${index}`}
                        name="option"
                        value={option}
                        checked={selectedOption === option}
                        onChange={onOptionChange}
                        className="form-check-input"
                    />
                    <label htmlFor={`option-${index}`} className="form-check-label">{option}</label>
                </div>
            ))}
        </div>
    );
};

export default Options;
