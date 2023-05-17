import Banner from '../shared/Banner';
function BannerComponent() {
  return (
    <Banner>
      <h2 className="text-center text-5xl font-bold pt-12 px-8 break-words">
        Save big with our cheap rental cars!
      </h2>
      <h4 className="text-center pt-5 text-lg pb-12 px-8">
        Top Condition. Local Suppliers.{' '}
        <span className="text-pastelYellow font-semibold">24/7</span> Support
      </h4>
    </Banner>
  );
}

export default BannerComponent;
