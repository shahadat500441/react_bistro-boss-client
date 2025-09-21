const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="flex space-x-6 ">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[120px] object-cover"
        src={image}
        alt=""
      />
      <div>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-400 font-medium">${price}</p>
    </div>
  );
};

export default MenuItem;
