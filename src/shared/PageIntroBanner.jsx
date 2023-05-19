function PageIntroBanner({ title }) {
  return (
    <div className="mb-[10rem]">
      <div
        className="absolute top-0 w-screen h-[30rem] -z-10 bg-cover bg-bottom bg-no-repeat opacity-25"
        style={{ backgroundImage: 'url(/img/page-background.jpg)' }}
      ></div>
      <div className="mx-auto container xl:w-[70%] my-28 px-6">
        <h2 className="font-bold text-4xl py-3">{title}</h2>
        <h4 className="font-semibold">Home/{title}</h4>
      </div>
    </div>
  );
}

export default PageIntroBanner;
