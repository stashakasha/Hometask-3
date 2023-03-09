import './assets/scss/style.scss';

import { Preloader, Header, ProgressBar, Hero, Services, About, Stats, Testimonials, News, Subscribe, Footer } from './components'

import React, { closeTimeoutId, useEffect, useState } from 'react';

function App() {
  const [timeoutId, setTimeoutId] = useState(null);
  const timeThreshold = 1 * 60 * 1000; 

  useEffect(() => {
    const id = setTimeout(() => {
      const response = window.confirm('Are you still here?');
      if (!response) {
          window.close();
      }
    }, timeThreshold);
    setTimeoutId(id);
    // Clean up the timeouts when the component unmounts
    return () => {
      clearTimeout(id);
      clearTimeout(timeoutId);
    };
  }, []);

  function resetTimeout() {
    // Clear the existing timeouts (if there are any)
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (closeTimeoutId) {
      clearTimeout(closeTimeoutId);
    }
    // Set up a new timeout
    const id = setTimeout(() => {
      const response = window.confirm('Are you still here?');
      if (!response) {
        // If the user doesn't respond, set up a second timeout with a delay
        const closeTimeoutId = setTimeout(() => {
          window.close();
        }, 10 * 1000); // 30 seconds
        setTimeoutId(closeTimeoutId);
      }
    }, timeThreshold);
    setTimeoutId(id);
  }

  return (
    <div onMouseMove={resetTimeout}>
      <div className='wrapper'>
      <Preloader />
      <Header />
      <ProgressBar />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <News />
      <Subscribe />
      <Footer />
    </div>
    </div>
  );
}

export default App;
