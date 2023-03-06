import './assets/scss/style.scss';

import { Header, ProgressBar, Hero, Services, About, Stats, Testimonials, News, Subscribe, Footer } from './components'


function App() {
  return (
    <div className='wrapper'>
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
  );
}

export default App;
