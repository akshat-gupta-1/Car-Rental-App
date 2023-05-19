import PageIntroBanner from '../shared/PageIntroBanner';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { MdLocationPin } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import { SlEnvolopeLetter } from 'react-icons/sl';
import Button from '../shared/Button';
import PageBanner from '../shared/PageBanner';
import Footer from './Footer';
function ContactPage() {
  return (
    <div>
      <PageIntroBanner title={'Contact'} />
      <div className="py-[7rem] mx-auto xl:w-[67%] container grid md:grid-cols-customContact lg:gap-x-20 md:gap-x-5 px-6 grid-cols-1 gap-y-12 md:gap-y-0">
        <div className="[&>h3]:font-semibold space-y-6">
          <h2 className="font-bold text-4xl">Need additional information?</h2>
          <p className="text-gray-500">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <IconContext.Provider value={{ className: 'inline' }}>
            <h3>
              <FaPhoneAlt /> 011-3479-7584
            </h3>
            <h3>
              <GrMail /> carrental@gmail.com
            </h3>
            <h3>
              <MdLocationPin /> Delhi,India
            </h3>
          </IconContext.Provider>
        </div>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="font-semibold after:content-['*'] after:text-pastelYellow after:ml-0.5"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Eg:'Aditi Sharma'"
              className="w-full block mt-3 focus:outline-none px-4 py-4 bg-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="font-semibold after:content-['*'] after:text-pastelYellow after:ml-0.5"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="youremail@example.com"
              className="w-full block mt-3 focus:outline-none px-4 py-4 bg-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="details"
              className="font-semibold after:content-['*'] after:text-pastelYellow after:ml-0.5"
            >
              Tell us about it
            </label>
            <input
              type="text"
              placeholder="Write Here..."
              className="w-full block mt-3 focus:outline-none px-4 pt-4 pb-32 bg-gray-100"
            />
          </div>
          <div className="grid">
            <Button>
              <SlEnvolopeLetter
                style={{ display: 'inline', marginRight: '12px' }}
              />
              Send Message
            </Button>
          </div>
        </div>
      </div>
      <PageBanner />
      <Footer />
    </div>
  );
}

export default ContactPage;
