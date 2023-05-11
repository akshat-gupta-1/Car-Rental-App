import { FaCarAlt } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import Select from 'react-select';
function FormSelector({ selectName, title, selectOptions }) {
  const selectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#E5E5E5',
      fontSize: '12px',
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: isFocused ? '#ccc' : '#E5E5E5',
      color: isFocused ? 'black' : '#91a1b3',
      fontSize: '12px',
    }),
    singleValue: (styles, state) => ({
      ...styles,
      color: '#14213D',
      fontWeight: 'bold',
    }),
  };
  return (
    <div>
      <label htmlFor={selectName} className="flex items-center space-x-2">
        {selectName === 'car-type' ? (
          <FaCarAlt style={{ color: '#FCA311', marginRight: '4px' }} />
        ) : (
          <MdLocationPin style={{ color: '#FCA311', marginRight: '4px' }} />
        )}
        <span className=" text-darkBlue font-semibold text-sm">{title}</span>
      </label>
      <Select
        options={selectOptions}
        placeholder={title}
        name={selectName}
        required
        styles={selectStyles}
      />
    </div>
  );
}

export default FormSelector;
