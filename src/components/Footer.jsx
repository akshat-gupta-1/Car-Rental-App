import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import Button from '../shared/Button';
function Footer() {
  return (
    <div className="grid grid-cols-4 w-[70%] mx-auto container py-20">
      <IconContext.Provider value={{ className: 'inline font-bold mx-2' }}>
        <ul className="grid gap-y-3">
          <li className="text-2xl font-bold">
            CAR <span className="font-normal">Rental</span>
          </li>
          <li className="text-gray-500">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </li>
          <li className="font-bold">
            <FaPhoneAlt />
            011-3479-7584
          </li>
          <li className="font-bold px-1">
            <GrMail />
            carrental@gmail.com
          </li>
        </ul>
      </IconContext.Provider>
      <ul className="space-y-2">
        <li className="font-bold text-2xl">COMPANY</li>
        <li>
          <a
            href=""
            className="hover:text-pastelYellow transition-all ease-in duration-100"
          >
            Delhi
          </a>
        </li>
        <li>
          <a
            href=""
            className="hover:text-pastelYellow transition-all ease-in duration-100"
          >
            Careers
          </a>
        </li>
        <li>
          <a
            href=""
            className="hover:text-pastelYellow transition-all ease-in duration-100"
          >
            Mobile
          </a>
        </li>
        <li>
          <a
            href=""
            className="hover:text-pastelYellow transition-all ease-in duration-100"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href=""
            className="hover:text-pastelYellow transition-all ease-in duration-100"
          >
            How we work
          </a>
        </li>
      </ul>
      <ul className="space-y-2">
        <li className="font-bold text-2xl">WORKING HOURS</li>
        <li>Mon - Fri: 9:00AM - 8:00PM</li>
        <li>Sat: 9:00AM - 5:00PM</li>
        <li>Sun: Closed</li>
      </ul>
      <ul className="grid gap-3">
        <li className="font-bold text-2xl">SUBSCRIPTION</li>
        <li>Subscribe your Email address for latest news & updates.</li>
        <li>
          <input
            type="text"
            placeholder="Enter email address"
            className="py-2 px-4 text-center bg-gray-100 focus:outline-none"
          />
        </li>
        <li className="grid grid-cols-1">
          <Button>Submit</Button>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
