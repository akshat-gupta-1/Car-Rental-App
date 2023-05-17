function AppBanner() {
  return (
    <div className="bg-gray-100">
      <div className="bg-gray-100 mx-auto container xl:w-[70%] grid grid-cols-1  xl:grid-cols-[1fr_750px] md:grid-cols-2 ">
        <div className=" h-[25rem] py-16 ls:grid ls:grid-cols-[250px_250px] flex flex-col px-8 items-center md:px-4 justify-center md:justify-normal">
          <div className="col-span-2">
            <h2 className="font-bold text-4xl">
              Download our app to get most out of it
            </h2>
            <p className="py-6 text-gray-500 font-medium text-sm">
              Occaecat commodo eiusmod enim sit esse occaecat ea duis consequat
              fugiat reprehenderit sit.Qui minim veniam esse enim magna
              cupidatat.
            </p>
          </div>
          <img
            src="/img/AppBanner/google.png"
            alt=""
            className="h-[70px] w-[220px]"
          />
          <img
            src="/img/AppBanner/apple.png"
            alt=""
            className="h-[70px] w-[220px]"
          />
        </div>
        <div className="hidden md:flex md:justify-end xl:justify-normal">
          <img src="/img/AppBanner/logo-phone.png" alt="" />
          <img
            src="/img/AppBanner/phone-img.png"
            alt=""
            className="hidden xl:block"
          />
        </div>
      </div>
    </div>
  );
}

export default AppBanner;
