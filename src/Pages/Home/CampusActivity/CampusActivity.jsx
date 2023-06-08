import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
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
import { Pagination } from "swiper";

const CampusActivity = () => {
    return (
        <>
        <h2 className="text-center text-4xl font-semibold mt-8 mb-8">Campus Activites</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default CampusActivity;