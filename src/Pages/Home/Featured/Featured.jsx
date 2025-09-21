import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "./../../../components/SectionTitle/SectionTitle";
import "./Featured.css"
const Featured = () => {
  return (
    <div className="featured-item py-10 bg-fixed bg-slate-300 bg-opacity-40">
      <SectionTitle
        subHeading="---Check it out---"
        heading="FROM OUR MENU"
      ></SectionTitle>

      <div className="md:flex items-center justify-between my-16 py-20 px-28 text-white ">
        <div  className="md:mr-10">
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <h2 className="text-xl font-medium">March 20, 2025</h2>
          <h3 className="uppercase my-2">WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline mt-4 border-0 border-b-4">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
