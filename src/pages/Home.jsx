import { useSelector } from "react-redux";
import image1 from "../assets/cover.jpg";
import image2 from "../assets/webapp.jpg";
import image3 from "../assets/mobapp.jpg";
import Footer from "../components/Footer";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  const username = user?.name;

  return (
    <div className="mt-16">
      <div className="bg-gradient-to-b from-black h-[480px]"></div>
      <div className=" z-10 mt-[-480px]">
        <h1 className="text-5xl text-[#42f142] font-bold p-6  hover:px-7">
          WE DEVELOP WEB & MOBILE APP
        </h1>
        <p className="text-3xl text-[#42f142] font-bold px-6  hover:px-7">
          DEEP DIG DATA FOR BUSINESS & MARKETING
        </p>
        <div className="flex justify-around w-[80%] md:w-[50%] mx-auto mt-20 text-white text-2xl font-bold">
          <button className="border rounded-md p-2 hover:bg-[#42f142] hover:text-black">
            GET STARTED
          </button>
          <button className="border rounded-md hover:bg-black hover:text-[#42f142] ml-4 px-1">
            BECOME A MEMBER
          </button>
        </div>
        <div className="block w-[100%] md:flex justify-around gap-2 my-8">
          <div className="mx-auto">
            <img
              src={image3}
              alt="atwira"
              className="h-[350px] w-[350px] mx-auto rounded-[50%] shadow-lg p-2 hover:p-1"
            />
            <button className="text-3xl font-semibold w-[100%] mx-auto my-4">
              MOBILE APP
            </button>
          </div>

          <div className="mx-auto">
            <img
              src={image2}
              alt="atwira"
              className="h-[350px] w-[350px] mx-auto rounded-[50%] shadow-lg p-2 hover:p-1"
            />
            <button className="text-3xl font-semibold w-[100%] mx-auto my-4">
              WEB DEVELOPMENT
            </button>
          </div>
          <div className="mx-auto">
            <img
              src={image1}
              alt="atwira"
              className="h-[350px] w-[350px] mx-auto rounded-[50%] shadow-lg p-2 hover:p-1"
            />
            <button className="text-3xl font-semibold w-[100%] mx-auto my-4">
              DATA ENTRY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
