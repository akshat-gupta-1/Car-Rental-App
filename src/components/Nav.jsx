import { Link } from 'react-router-dom';
import Button from '../shared/Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
function Nav() {
  let [open, setOpen] = useState(false);
  let links = [
    { linkName: 'Home', link: '/', id: '1' },
    { linkName: 'About', link: '/about', id: '2' },
    { linkName: 'Models', link: '/models', id: '3' },
    { linkName: 'Testimonials', link: '/testimonials', id: '4' },
    { linkName: 'Our Team', link: '/ourteam', id: '5' },
    { linkName: 'Contact', link: '/contact', id: '6' },
  ];
  return (
    <div className="w-full xl:w-[70%] lg:mx-auto container ">
      <div className="lg:flex py-8 px-6 items-center justify-between">
        <img
          src="../../public/img/logo.jpg"
          alt="Car-rental-logo"
          className="h-14 w-auto"
        />
        <div>
          <button
            className={`text-2xl absolute top-12 right-8 lg:hidden ${
              open && 'hidden'
            }`}
            onClick={() => open || setOpen(true)}
          >
            <FaBars />
          </button>
          <button
            className={`text-2xl absolute top-12 right-8 lg:hidden z-10 ${
              open || 'hidden'
            }`}
            onClick={() => open && setOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        <ul
          className={`flex flex-col items-center justify-center lg:flex-row lg:items-center lg:space-x-8 space-y-8 lg:space-y-0 absolute top-0 lg:static bg-white w-full h-screen lg:w-auto lg:h-auto lg:bg-transparent transition-all lg:transition-none duration-500 ease-in ${
            open ? 'left-0' : '-left-full'
          }`}
        >
          {links.map((item) => (
            <li key={item.id} className="font-semibold ">
              <Link
                to={item.link}
                className=" text-darkBlue hover:text-pastelYellow duration-500"
              >
                {item.linkName}
              </Link>
            </li>
          ))}
        </ul>
        <div className="space-x-3 hidden lg:block">
          <Link to={'/signup'} className="font-semibold">
            Sign Up
          </Link>
          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
