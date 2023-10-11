import { FaQuoteRight } from 'react-icons/fa';
function TestimonialCard({ review, name, id }) {
  return (
    <div
      className={`bg-white p-12 shadow-xl grid-cols-1 ${
        id === 2 ? 'hidden md:grid' : 'grid'
      }`}
    >
      <p className="font-medium text-xl pb-5">{review}</p>
      <div className="self-end grid sm:grid-cols-[100px_1fr_70px] grid-cols-[100px_1fr]">
        <img src="/static/images/Testimonial/profile.png" alt="" />
        <div className="self-center">
          <h4 className="text-lg font-bold">{name}</h4>
          <h5 className="font-medium">Delhi</h5>
        </div>
        <div className="self-center hidden sm:block">
          <FaQuoteRight style={{ color: '#FCA311', fontSize: '50px' }} />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
