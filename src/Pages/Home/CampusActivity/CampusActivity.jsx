 
import img1 from '../../../assets/campusActivity/1.jpg'
import img2 from '../../../assets/campusActivity/2.jpg'
import img3 from '../../../assets/campusActivity/3.jpg'
import img4 from '../../../assets/campusActivity/4.jpg'
import img5 from '../../../assets/campusActivity/5.jpg'
import img6 from '../../../assets/campusActivity/6.jpg'
import img7 from '../../../assets/campusActivity/7.jpg'
import img8 from '../../../assets/campusActivity/8.jpg'
import img9 from '../../../assets/campusActivity/9.jpg'
import img10 from '../../../assets/campusActivity/10.jpg'
import img11 from '../../../assets/campusActivity/11.jpg' 
import Marquee from "react-fast-marquee";

const CampusActivity = () => {
    return (
        <>
            <div>
                {/* <h2 className="text-center text-4xl font-semibold mt-8 mb-8">Campus Activites</h2> */}
                <div className="divider">Campus Activites</div>
            </div> 

            <Marquee className='gap-3'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
        <img src={img11} alt="" />
            </Marquee>

            <div className="flex justify-center">
                <button className="btn btn-wide btn-primary mt-8 mb-8">Enroll Now</button>
            </div>

        </>
    );
};

export default CampusActivity;