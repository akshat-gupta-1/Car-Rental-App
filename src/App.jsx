import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
