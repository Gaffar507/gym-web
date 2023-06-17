import './App.css';
import Connect from './components/connect/Connect';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testimonials from './components/testimonials/Testimonials';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;
