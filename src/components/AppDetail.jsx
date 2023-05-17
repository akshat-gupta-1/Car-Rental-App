function AppDetail() {
  return (
    <div className="container mx-auto xl:w-[70%]">
      <h4 className="text-center text-xl font-semibold mb-3 ">
        Plan your trip now
      </h4>
      <h2 className="text-center text-4xl font-bold mb-16">
        Quick and easy car rental
      </h2>
      <div className="grid grid-cols-1 gap-x-36 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-center items-center p-8">
          <img
            src="../../public/img/car-insurance.png"
            alt="verified car image"
            className="h-36 w-36"
          />
          <h5 className="font-bold text-lg my-4">Select Car</h5>
          <p className="text-center text-sm text-gray-500">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-8">
          <img
            src="../../public/img/call-center-agent.png"
            alt="operator image"
            className="h-36 w-36"
          />
          <h5 className="font-bold text-lg my-4">Contact Operator</h5>
          <p className="text-center text-sm text-gray-500">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-8">
          <img
            src="../../public/img/car-drive.png"
            alt="driving car image"
            className="h-36 w-36"
          />
          <h5 className="font-bold text-lg my-4">Let's Drive</h5>
          <p className="text-center text-sm text-gray-500">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppDetail;
