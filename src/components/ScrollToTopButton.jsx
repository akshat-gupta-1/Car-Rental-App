import { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
function ScrollToTopButton() {
  const [displayButton, setDisplayButton] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setDisplayButton(true);
      } else {
        setDisplayButton(false);
      }
    });
  });
  return (
    <div>
      {displayButton && (
        <button
          className="p-3 bg-darkBlue text-pastelYellow text-lg rounded-sm fixed bottom-8 right-8"
          onClick={handleClick}
        >
          <FaAngleUp />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
