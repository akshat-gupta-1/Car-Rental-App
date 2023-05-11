import FormSelector from '../shared/FormSelector';
import DateSelector from '../shared/DateSelector';
import Button from '../shared/Button';
function Registeration() {
  const carTypeOptions = [
    { value: 'select your option', label: 'Select Your Option' },
    {
      value: 'maruti swift dzire',
      label: 'Maruti Swift Dzire',
    },
    {
      value: 'honda amaze',
      label: 'Honda Amaze',
    },
    {
      value: 'hyundai creta',
      label: 'Hyndai Creta',
    },
    {
      value: 'toyota innova',
      label: 'Toyota Innova',
    },
    {
      value: 'hyundai verna',
      label: 'Hyundai Verna',
    },
  ];
  const locationOptions = [
    { value: 'select your option', label: 'Select Your Option' },
    { value: 'dwarka', label: 'Dwarka' },
    { value: 'hauz khas', label: 'Hauz Khas' },
    { value: 'connaught place', label: 'Connnaught Place' },
    { value: 'gurugram', label: 'Gurugram' },
    { value: 'Rajouri Garden', label: 'Rajouri Garden' },
  ];
  return (
    <div className="my-[17rem] container mx-auto xl:w-[70%] rounded-md shadow-lg shadow-gray-300 px-10 py-16">
      <h4 className="font-bold text-darkBlue text-xl mb-6">Book a Car</h4>
      <div className="grid grid-cols-1 grid-flow-row gap-x-5 gap-y-4 ls:grid-cols-2 lg:grid-cols-3">
        <FormSelector
          selectOptions={carTypeOptions}
          selectName={'car-type'}
          title={'Select Your Car Type'}
        />
        <FormSelector
          selectOptions={locationOptions}
          selectName="pick-up"
          title="Pick-up "
        />
        <FormSelector
          selectOptions={locationOptions}
          selectName="drop-off"
          title="Drop-off"
        />
        <DateSelector title={'Pick-up'} />
        <DateSelector title={'Drop-off'} />
        <Button>Search</Button>
      </div>
    </div>
  );
}

export default Registeration;
