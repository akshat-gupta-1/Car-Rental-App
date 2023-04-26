import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Nav from './components/Nav';
function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <HeroSection />
      </div>
    </Router>
  );
}

export default App;
