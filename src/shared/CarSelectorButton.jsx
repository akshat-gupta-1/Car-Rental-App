function CarSelectorButton({ title, handleClick, selected }) {
  return (
    <button
      onClick={() => handleClick(title)}
      className={`text-xl font-bold px-5 text-start py-3 w-full  transition-all duration-200 ease-in my-1 ${
        selected
          ? 'bg-darkBlue text-pastelYellow'
          : ' bg-gray-300 hover:bg-darkBlue hover:text-pastelYellow'
      }`}
    >
      {title}
    </button>
  );
}
CarSelectorButton.defaultProps = {
  selected: 'false',
};
export default CarSelectorButton;
