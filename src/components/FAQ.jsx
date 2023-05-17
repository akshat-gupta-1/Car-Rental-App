import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa';
function FAQ() {
  const faqs = [
    {
      id: 1,
      question: '1. What is special about comparing rental car deals?',
      answer:
        'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.',
    },
    {
      id: 2,
      question: '2. How do I find the car rental deals?',
      answer:
        'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.',
    },
    {
      id: 3,
      question: '3. How do I find such low rental car prices?',
      answer:
        'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.',
    },
  ];
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <div id="FAQ" className="max-h-fit">
      <div className="my-20 container mx-auto xl:w-[70%] grid grid-cols-[minmax(300px,_750px)] justify-center px-6 sm:px-0">
        <div className="mb-20">
          <h5 className="text-center font-bold text-xl">FAQ</h5>
          <h2 className="font-bold text-4xl text-center py-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-center">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className="shadow-xl bg-white">
          {faqs.map((item) => {
            return (
              <div key={item.id}>
                <div
                  className={`cursor-pointer px-8 py-4 font-medium grid grid-cols-[1fr_30px] transition-all ease-in duration-200 ${
                    selected == item.id
                      ? 'bg-darkBlue text-pastelYellow shadow-xl shadow-blue-950/50 '
                      : 'shadow-sm'
                  }`}
                  onClick={() => {
                    if (selected === item.id) {
                      setSelected(null);
                    } else {
                      setSelected(item.id);
                    }
                  }}
                >
                  <h3>{item.question}</h3>
                  <FaAngleDown
                    style={{
                      fontSize: '1.5rem',
                      transform: `${
                        selected === item.id ? 'rotate(180deg)' : 'rotate(0deg)'
                      }`,
                      transition: 'all 0.3s ease-in',
                    }}
                  />
                </div>
                <AnimatePresence>
                  {selected === item.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-10 py-8 text-gray-500 text-[15px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
