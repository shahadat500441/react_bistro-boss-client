import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/home/01.jpg"; // requires a loader
import img2 from "../../../assets/home/02.jpg"; // requires a loader
import img3 from "../../../assets/home/03.png"; // requires a loader
import img4 from "../../../assets/home/04.jpg"; // requires a loader
import img5 from "../../../assets/home/05.png"; // requires a loader
import img6 from "../../../assets/home/06.png"; // requires a loader
// requires a loader

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
      </div>
    </Carousel>
  );
};

export default Banner;
