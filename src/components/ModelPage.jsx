import PageIntroBanner from '../shared/PageIntroBanner';
import CarData from '../data/CarData';
import ModelPageCard from '../shared/ModelPageCard';
import PageBanner from '../shared/PageBanner';
import Footer from './Footer';
function ModelPage() {
  return (
    <div>
      <PageIntroBanner title={'Vehicle Models'} />
      <div className="mx-auto xl:w-[70%] container grid grid-cols-[340px] pt-[7rem] mb-[8rem] gap-x-6 gap-y-8 lg:grid-cols-[340px_340px_340px] md:grid-cols-[340px_340px] px-10 justify-center">
        {CarData.map((item, index) => {
          return <ModelPageCard {...item} key={index} />;
        })}
      </div>
      <PageBanner />
      <Footer />
    </div>
  );
}

export default ModelPage;
