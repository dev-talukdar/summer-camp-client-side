
 
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import CampusActivity from "../CampusActivity/CampusActivity";
import Instructors from "../Instructors/Instructors";
import PopularClass from "../PopularClass/PopularClass";



const Home = () => {
  return (
    <div> 
      <Banner></Banner>
      <PopularClass></PopularClass>
      <AboutUs></AboutUs>
      <CampusActivity></CampusActivity>
      <Instructors></Instructors>
    </div>
  );
};

export default Home;