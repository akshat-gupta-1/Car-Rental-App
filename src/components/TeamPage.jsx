import PageIntroBanner from '../shared/PageIntroBanner';
import PageBanner from '../shared/PageBanner';
import Footer from './Footer';
function TeamPage() {
  return (
    <div>
      <PageIntroBanner title={'Our Team'} />
      <div className="mx-auto xl:w-[70%] container pt-[8rem] mb-[6rem] grid lg:grid-cols-[330px_330px_330px] md:grid-cols-[330px_330px] grid-cols-[330px] gap-8 justify-center px-4">
        <div className="border-2 border-gray-100 shadow-xl">
          <img src="/static/images/Team/team-1.jpg" alt="" />
          <h3 className="font-bold text-2xl text-center  mt-6 mb-2">
            Rishabh Verma
          </h3>
          <h5 className="text-center text-gray-500 font-semibold mb-8">
            Business Owner
          </h5>
        </div>
        <div className="border-2 border-gray-100 shadow-xl">
          <img src="/static/images/Team/team-2.jpg" alt="" />
          <h3 className="font-bold text-2xl text-center  mt-6 mb-2">
            Akash Gupta
          </h3>
          <h5 className="text-center text-gray-500 font-semibold mb-8">
            Salesman
          </h5>
        </div>
        <div className="border-2 border-gray-100 shadow-xl">
          <img src="/static/images/Team/team-3.jpg" alt="" />
          <h3 className="font-bold text-2xl text-center  mt-6 mb-2">
            Aditi Sharma
          </h3>
          <h5 className="text-center text-gray-500 font-semibold mb-8">
            Manager
          </h5>
        </div>
      </div>
      <PageBanner />
      <Footer />
    </div>
  );
}

export default TeamPage;
