import PropTypes from 'prop-types';
function Button({ children, type }) {
  return (
    <button
      className={`font-semibold py-3 px-8 transition-all rounded-sm ${
        type === 'dark'
          ? ' bg-black text-white border-black border-2 hover:bg-white hover:text-black'
          : ' bg-darkBlue  text-pastelYellow shadow-md hover:shadow-lg hover:shadow-darkBlue shadow-darkBlue rounded'
      }`}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};
Button.defaultProps = {
  type: 'normal',
};
export default Button;
