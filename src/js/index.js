import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/home.jsx";

const App = () => {
    const [isRunning, setIsRunning] = useState(true);
    const [counter, setCounter] = useState(0);
    const [startNumber, setStartNumber] = useState(1000);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) {
                setCounter((prevCounter) => prevCounter + 1);
                setStartNumber((prevStartNumber) => prevStartNumber - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [isRunning]); 

    return (
        <Home 
            startNumber={startNumber} 
            counter={counter} 
            isRunning={isRunning} 
            setIsRunning={setIsRunning}
        />
    );
};

// Create root and INITIAL RENDER
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
