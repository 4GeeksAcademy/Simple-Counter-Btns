import React from 'react';
import PropTypes from "prop-types";
import '../../styles/startStopButtons.css';

const StartStopButtons = ({ isRunning, setIsRunning }) => {
    return (
        <>
            <button 
                type="button" 
                onClick={() => setIsRunning(true)} 
                className="btn btn-success"
                disabled={isRunning}
            >
                Start
            </button>
            <button 
                type="button" 
                onClick={() => setIsRunning(false)} 
                className="btn btn-danger"
                disabled={!isRunning}
            >
                Stop
            </button>
        </>
    );
};

StartStopButtons.propTypes = {
    isRunning: PropTypes.bool.isRequired,
    setIsRunning: PropTypes.func.isRequired
};

export default StartStopButtons;
