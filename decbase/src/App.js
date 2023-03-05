import './assets/scss/style.scss';

import { Header, Hero, Services, About, Stats, Testimonials, News, Subscribe, Footer } from './components'


function App() {
  return (
    <div className='wrapper'>
      <Header />
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
