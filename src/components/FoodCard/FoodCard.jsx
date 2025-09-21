const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className=" absolute bg-slate-600 text-white right-0 mt-4 px-2 mr-4">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center ">
        <h2 className="card-title ">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions ">
          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 hover:bg-black hover:text-white  uppercase mt-2">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
