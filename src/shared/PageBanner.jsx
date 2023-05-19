import Banner from './Banner';
import { FaPhoneAlt } from 'react-icons/fa';
function PageBanner() {
  return (
    <Banner>
      <div className="max-w-[1100px] mx-auto container">
        <div className="font-bold text-center text-3xl py-16 mt-16 mb-5 px-4 grid md:grid-cols-[1fr_300px] grid-cols-1 gap-y-4 ">
          <p>Book a car by getting in touch with us</p>
          <span className="text-pastelYellow">
            <FaPhoneAlt style={{ display: 'inline', marginRight: '0.5rem' }} />
            011-3479-7584
          </span>
        </div>
      </div>
    </Banner>
  );
}

export default PageBanner;
