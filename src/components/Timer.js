import React, { closeTimeoutId, useEffect, useState } from 'react';

function Timer() {
  const [timeoutId, setTimeoutId] = useState(null);
  const timeThreshold = 1 * 60 * 1000; 
  function openNewWindow() {
    const newWindow = window.open('https://www.example.com', '_blank');
  }
  useEffect(() => {
    const id = setTimeout(() => {
      const response = window.confirm('Are you still here?');
      if (!response) {
        const closeTimeoutId = setTimeout(() => {
          window.close();
        }, 10 * 1000); 
        setTimeoutId(closeTimeoutId);
      }
    }, timeThreshold);
    setTimeoutId(id);
    return () => {
      clearTimeout(id);
      clearTimeout(timeoutId);
    };
  }, []);

  function resetTimeout() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (closeTimeoutId) {
      clearTimeout(closeTimeoutId);
    }

    const id = setTimeout(() => {
      const response = window.confirm('Are you still here?');
      if (!response) {
        const closeTimeoutId = setTimeout(() => {
          window.close();
        }, 10 * 1000); 
        setTimeoutId(closeTimeoutId);
      }
    }, timeThreshold);
    setTimeoutId(id);
  }

  return (
    <div onMouseMove={resetTimeout}>
    </div>
  );
}

export default Timer;