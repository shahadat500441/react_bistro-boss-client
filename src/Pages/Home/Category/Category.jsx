import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import slideImg1 from "../../../assets/home/slide1.jpg";
import slideImg2 from "../../../assets/home/slide2.jpg";
import slideImg3 from "../../../assets/home/slide3.jpg";
import slideImg4 from "../../../assets/home/slide4.jpg";
import slideImg5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
        <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
        ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide>
          <img src={slideImg1} alt="" />
          <h2 className="text-4xl font-medium uppercase -mt-30 text-center text-white">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg2} alt="" />
          <h2 className="text-4xl font-medium uppercase -mt-30 text-center text-white">
          pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg3} alt="" />
          <h2 className="text-4xl font-medium uppercase -mt-30 text-center text-white">
       
           Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg4} alt="" />
          <h2 className="text-4xl font-medium uppercase -mt-30 text-center text-white">
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg5} alt="" />
          <h2 className="text-4xl font-medium uppercase -mt-30 text-center text-white">
            Salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
