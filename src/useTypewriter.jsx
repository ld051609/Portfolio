// useTypeWriter.js
import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 150) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            // Add the next character to the display text
            setDisplayText((prev) => prev + text.charAt(index));
            index++;
            
            // If we reach the end of the text, clear the interval
            if (index >= text.length) {
                clearInterval(interval);
            }
        }, speed);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [text, speed]);

    return displayText;
};

export default useTypewriter;
