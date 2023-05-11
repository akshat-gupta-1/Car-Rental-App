import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Nav from './components/Nav';
import Registeration from './components/Registeration';
function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <HeroSection />
        <Registeration />
      </div>
    </Router>
  );
}

export default App;
