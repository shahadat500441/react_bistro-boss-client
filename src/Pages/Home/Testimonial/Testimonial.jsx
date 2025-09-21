import { useEffect, useState } from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="m-10">
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper  ">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-24 text-center ">
              <div className="flex items-center justify-center mb-5 text-4xl">
                <FaRegStarHalfStroke></FaRegStarHalfStroke>
                <FaRegStarHalfStroke></FaRegStarHalfStroke>
                <FaRegStarHalfStroke></FaRegStarHalfStroke>
                <FaRegStarHalfStroke></FaRegStarHalfStroke>
                <FaRegStarHalfStroke></FaRegStarHalfStroke>
              </div>
              <p>{review.details}</p>
              <h2 className="text-3xl font-bold text-orange-500">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
