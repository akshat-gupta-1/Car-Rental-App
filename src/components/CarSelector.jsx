import CarSelectorButton from '../shared/CarSelectorButton';
import CarData from '../data/CarData';
import { useEffect, useState } from 'react';
import InfoTable from '../shared/InfoTable';
function CarSelector({ handleClick }) {
  const [selected, setSelected] = useState('Maruti Swift Dzire');
  const [item, setItem] = useState();
  useEffect(() => {
    const [data] = CarData.filter((item) => selected === item.carName);
    setItem(data);
  }, [selected]);
  return (
    <div className="container mx-auto xl:w-[70%] my-28">
      <h4 className="text-center text-xl font-semibold my-3">Vehicle Models</h4>
      <h2 className="text-center text-4xl font-bold ">Our rental fleet</h2>
      <h6 className="text-center my-4 text-gray-500">
        Choose from a variety of our amazing vehicles to rent for your next{' '}
        <br />
        adventure or business trip
      </h6>
      <div className="mx-3 grid lg:grid-cols-custom my-10 xl:gap-x-20 md:grid-cols-custom2 md:gap-x-5 lg:gap-x-0 grid-cols-1 gap-y-10 lg:gap-y-0">
        <div className="md:col-span-2 lg:col-span-1">
          {CarData.map((item) => {
            return (
              <CarSelectorButton
                key={item.id}
                title={item.carName}
                handleClick={(title) => {
                  setSelected(title);
                }}
                selected={selected === item.carName}
              />
            );
          })}
        </div>
        <div>
          {CarData.filter((item) => selected === item.carName).map(
            (filterItem) => {
              return <img src={filterItem.img} key={filterItem.id} alt="" />;
            }
          )}
        </div>
        <div className="justify-self-center md:justify-self-auto">
          <InfoTable {...item} />
          <button
            className="my-2 bg-darkBlue text-pastelYellow w-[17rem] px-8 py-3 font-bold text-lg shadow-lg shadow-slate-400 hover:bg-opacity-95"
            onClick={handleClick}
          >
            RESERVE NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarSelector;
