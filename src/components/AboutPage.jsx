import PageIntroBanner from '../shared/PageIntroBanner';
import { IconContext } from 'react-icons/lib';
import { FaStoreAlt, FaCar } from 'react-icons/fa';
import { GiHomeGarage } from 'react-icons/gi';
import Footer from './Footer';
import AppDetail from './AppDetail';
import PageBanner from '../shared/PageBanner';
function AboutPage() {
  return (
    <div>
      <PageIntroBanner title={'About'} />
      <div className="container mx-auto xl:w-[60%] grid lg:grid-cols-2 grid-cols-1 gap-8 px-6 mb-24 mt-[15rem]">
        <img
          src="/img/about-page-image.jpg"
          alt=""
          className="justify-self-center"
        />
        <div className="space-y-6 text-center lg:text-left">
          <h5 className="font-semibold text-xl">About Company</h5>
          <h2 className="font-bold text-4xl">
            You start the engine and your adventure begins
          </h2>
          <p className="text-gray-500">
            Proident commodo duis dolor aliqua exercitation nulla consectetur
            esse enim ea officia quis enim velit. Velit excepteur duis ea magna
            amet. Ut reprehenderit nisi fugiat dolor. Nostrud laborum nulla
            cupidatat nostrud. Eiusmod aliquip amet non ut dolore laborum cillum
            mollit aliquip deserunt ad excepteur commodo.
          </p>
          <IconContext.Provider
            value={{
              className: 'font-bold text-6xl text-darkBlue mx-6 lg:mx-0',
            }}
          >
            <div className="grid sm:grid-cols-3 grid-cols-1 space-y-4 sm:space-y-0">
              <div className="space-y-3 grid justify-center">
                <FaCar />
                <div className="grid sm:grid-cols-[1.25fr_1fr] gird-cols-1 justify-center">
                  <span className="text-5xl font-bold text-pastelYellow ">
                    20
                  </span>
                  <span>Car Types</span>
                </div>
              </div>
              <div className="space-y-3 grid justify-center">
                <FaStoreAlt />
                <div className="grid sm:grid-cols-2 gird-cols-1 justify-center">
                  <span className="text-5xl font-bold text-pastelYellow ">
                    85
                  </span>
                  <span>Rental Outlets</span>
                </div>
              </div>
              <div className="space-y-3 grid justify-center">
                <GiHomeGarage />
                <div className="grid sm:grid-cols-2 gird-cols-1 justify-center">
                  <span className="text-5xl font-bold text-pastelYellow ">
                    75
                  </span>
                  <span>Repair Shops</span>
                </div>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <AppDetail />
      <PageBanner />
      <Footer />
    </div>
  );
}

export default AboutPage;
