import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import CampusActivity from "../CampusActivity/CampusActivity";
import PopularClass from "../PopularClass/PopularClass";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <AboutUs></AboutUs>
      <CampusActivity></CampusActivity>
    </div>
  );
};

export default Home;