import { NavLink, Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="flex justify-around items-center space-x-8 mt-6 font-semibold">
      <img src="../../public/logo.jpg" alt="App-logo" className="h-14 w-auto" />
      <ul className="flex space-x-6">
        <li key={1}>
          <NavLink to={'/home'}>Home</NavLink>
        </li>
        <li key={2}>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li key={3}>
          <NavLink to={'/models'}>Models</NavLink>
        </li>
        <li key={4}>
          <NavLink to={'/testimonials'}>Testimonials</NavLink>
        </li>
        <li key={5}>
          <NavLink to={'/ourteam'}>Our Team</NavLink>
        </li>
        <li key={6}>
          <NavLink to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
      <div className="space-x-8">
        <Link to={'/sign-in'}>Sign In</Link>
        <button className="bg-darkBlue py-3 px-5 text-pastelYellow shadow-md hover:shadow-lg hover:shadow-darkBlue shadow-darkBlue">
          Register
        </button>
      </div>
    </div>
  );
}

export default Navbar;
