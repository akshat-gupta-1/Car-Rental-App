import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Nav from './components/Nav';
import Registeration from './components/Registeration';
import AppDetail from './components/AppDetail';
import CarSelector from './components/CarSelector';
import BannerComponent from './components/BannerComponent';
import Cta from './components/Cta';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AppBanner from './components/AppBanner';
import Footer from './components/Footer';
import { useRef } from 'react';
function App() {
  let childRef = useRef(null);
  const handleClick = () => {
    childRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Registeration forwardedRef={childRef} />
                <AppDetail />
                <CarSelector handleClick={handleClick} />
                <BannerComponent />
                <Cta />
                <Testimonials />
                <FAQ />
                <AppBanner />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
