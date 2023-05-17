import TestimonialCard from '../shared/TestimonialCard';
function Testimonials() {
  const testimonial = [
    {
      id: 1,
      review:
        '"I had a fantastic experience with website. Easy booking, great selection of cars, and transparent pricing."',
      name: 'Alex Bhatti',
    },
    {
      id: 2,
      review:
        '"The vehicle was clean and well-maintained. Highly recommend this website for a hassle-free car rental experience."',
      name: 'Timothy Gupta',
    },
  ];
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto xl:w-[70%]">
        <div className="grid grid-cols-[minmax(300px,_700px)] justify-center justify-items-center mx-4">
          <h5 className="pt-20 text-center font-semibold text-lg">
            Reviewed By People
          </h5>
          <h2 className="pt-2 text-4xl font-bold text-center">
            Client's Testimonials
          </h2>
          <p className="text-center text-gray-500 pt-5">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="mx-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-x-7 relative">
          {testimonial.map((item) => (
            <TestimonialCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
