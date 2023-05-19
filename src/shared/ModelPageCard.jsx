import { TbEngine } from 'react-icons/tb';
import { FaCarAlt } from 'react-icons/fa';
import { BsFuelPumpFill } from 'react-icons/bs';
import { GiCarSeat } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import Button from './Button';
function ModelPageCard({
  model,
  manufacturer,
  price,
  transmission,
  fuel,
  seats,
  img,
}) {
  return (
    <IconContext.Provider
      value={{ className: 'inline mx-1 font-bold text-lg text-black' }}
    >
      <div className="grid grid-cols-[330px] ">
        <div className="border-2 border-gray-300">
          <img src={img} alt="" className="object-cover mb-6" />
          <div className="grid grid-cols-2 mx-5 border-b-2 border-gray-300 mb-4">
            <div className="grid grid-rows-3 [&>h5]:text-xl [&>h5]:text-gray-500 [&>h5]:font-semibold">
              <h3 className="font-bold text-2xl">{model}</h3>
              <h5>
                <FaCarAlt />
                {manufacturer}
              </h5>
              <h5>
                <TbEngine />
                {transmission}
              </h5>
            </div>
            <div className="grid grid-rows-3 justify-self-end [&>h5]:text-xl [&>h5]:text-gray-500 [&>h5]:font-semibold">
              <p className="justify-self-end">
                <span className="font-bold text-2xl">Rs {price}</span> <br />{' '}
                <span className="text-lg">per day</span>
              </p>
              <h5 className="justify-self-end">
                {seats}
                <GiCarSeat />
              </h5>
              <h5 className="justify-self-end">
                {fuel}
                <BsFuelPumpFill />
              </h5>
            </div>
          </div>
          <div className="grid mx-4 mb-4">
            <Button>Book Ride</Button>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default ModelPageCard;
