import React from "react";
import calculatePlaceValues from "../../lib/CalcPlaceValues.js";
import SecondsCounter from "./SecondsCounter.jsx";
import HundredSecondsAlert from "./HundredSecondsAlert.jsx";
import Countdown from "./Countdown.jsx";
import StartStopButtons from "./StartStopButtons.jsx";

const Home = ({ startNumber, counter, isRunning, setIsRunning }) => {
    return (
        <>
            <div className="label">COUNTDOWN TIMER:</div>
            <Countdown 
                onesDigit={calculatePlaceValues(startNumber, 1)}
                tensDigit={calculatePlaceValues(startNumber, 10)}
                hundredsDigit={calculatePlaceValues(startNumber, 100)}
                thousandsDigit={calculatePlaceValues(startNumber, 1000)}
            /> 
            <StartStopButtons isRunning={isRunning} setIsRunning={setIsRunning} />
            <div className="label">STOPWATCH:</div>
            <HundredSecondsAlert 
                onesDigit={calculatePlaceValues(counter, 1)}
                tensDigit={calculatePlaceValues(counter, 10)}
                hundredsDigit={calculatePlaceValues(counter, 100)}
            />
            <SecondsCounter 
                onesDigit={calculatePlaceValues(counter, 1)}
                tensDigit={calculatePlaceValues(counter, 10)}
                hundredsDigit={calculatePlaceValues(counter, 100)}
                thousandsDigit={calculatePlaceValues(counter, 1000)}
            />
        </>
    );
};

export default Home;
