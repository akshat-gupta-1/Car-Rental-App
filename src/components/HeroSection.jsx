import { FaCheckCircle, FaAngleRight } from 'react-icons/fa';
import Button from '../shared/Button';
function HeroSection() {
  return (
    <div>
      <img
        src="/static/images/hero-background.png"
        alt=""
        className="absolute -z-10 top-0 right-0 hidden md:block"
      />
      <div className="my-[10rem] w-full sm:px-14 px-8 md:flex lg:mx-auto xl:w-[70%] md:container">
        <div className="flex flex-col items-center justify-center space-y-6 md:max-w-md z-9">
          <h5 className="text-xl font-bold md:container md:text-left">
            Plan your trip now
          </h5>
          <h1 className="text-5xl text-center font-bold md:text-left">
            Save <span className="text-pastelYellow">big</span> with our rental
            car
          </h1>
          <p className="text-center text-slate-500 text-sm md:text-left">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-baseline items-center sm:justify-center sm:space-x-5 space-y-4 md:justify-start md:container">
            <Button>
              <div className="flex justify-center items-center px-16 py-2 sm:py-0 sm:px-0">
                Book Ride
                <FaCheckCircle />
              </div>
            </Button>
            <Button type="dark">
              <div className="flex justify-center items-center px-16 py-2 sm:py-0 sm:px-0">
                Learn More
                <FaAngleRight />
              </div>
            </Button>
          </div>
        </div>
        <div>
          <img
            src="/static/images/hero-car.png"
            className="hidden md:block xl:-translate-y-10 xl:w-[40%] lg:w-[550px] md:-translate-x-20 md:w-[450px] lg:translate-x-0 z-[-1] absolute"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
