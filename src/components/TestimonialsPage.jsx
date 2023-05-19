import PageIntroBanner from '../shared/PageIntroBanner';
import Testimonials from './Testimonials';
import PageBanner from '../shared/PageBanner';
import Footer from './Footer';
function TestimonialsPage() {
  return (
    <div>
      <PageIntroBanner title={'Testimonials'} />
      <Testimonials />
      <PageBanner />
      <Footer />
    </div>
  );
}

export default TestimonialsPage;
