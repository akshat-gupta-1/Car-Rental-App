import Button from '../shared/Button';
import { FaAngleRight } from 'react-icons/fa';
function Cta() {
  return (
    <div id="cta" className="pb-20">
      <div className="mx-auto container xl:w-[70%] grid lg:grid-cols-customcta2 grid-cols-1 gap-y-8 lg:gap-y-2">
        <img
          src="/static/images/CtaImages/cta-image.png"
          alt=""
          className="lg:col-span-2 justify-self-center"
        />
        <div className="lg:justify-self-end max-w-[470px] justify-self-center lg:mx-0 mx-5">
          <h4 className="text-lg font-semibold py-2 lg:text-left text-center">
            Why Choose Us
          </h4>
          <h2 className="text-4xl font-bold lg:text-left text-center">
            Best valued deals you will ever find
          </h2>
          <p className="text-gray-500 py-5 lg:text-left text-center">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button>
              Find Details <FaAngleRight style={{ display: 'inline' }} />
            </Button>
          </div>
        </div>
        <div className="grid gap-y-5 justify-self-center mx-4 sm:mx-0">
          <div className="grid sm:grid-cols-customcta grid-cols-1 justify-items-center">
            <img src="/static/images/CtaImages/county-drive.png" alt="" />
            <div>
              <h4 className="text-xl font-bold pb-1 lg:text-left text-center">
                Cross Country Drive
              </h4>
              <p className="text-gray-500 text-sm lg:text-left text-center">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-customcta  grid-cols-1 justify-items-center ">
            <img src="/static/images/CtaImages/rupee.png" alt="" />
            <div>
              <h4 className="text-xl font-bold pb-1 lg:text-left text-center">
                All Inclusive Pricing
              </h4>
              <p className="text-gray-500 text-sm lg:text-left text-center">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-customcta grid-cols-1 justify-items-center">
            <img src="/static/images/CtaImages/exchange.png" alt="" />
            <div>
              <h4 className="text-xl font-bold pb-1 lg:text-left text-center">
                No Hidden Charges
              </h4>
              <p className="text-gray-500 text-sm lg:text-left text-center">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
