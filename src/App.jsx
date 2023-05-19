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
import ScrollToTopButton from './components/ScrollToTopButton';
import AboutPage from './components/AboutPage';
import TestimonialsPage from './components/TestimonialsPage';
import ContactPage from './components/ContactPage';
import ModelPage from './components/ModelPage';
import TeamPage from './components/TeamPage';
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
                <ScrollToTopButton />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/testimonials" element={<TestimonialsPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/models" element={<ModelPage />}></Route>
          <Route path="/ourteam" element={<TeamPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
