import Cover from "../../Shared/Cover/Cover";
import MenuItem from "./../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items,title,img  }) => {
  return (
    <div>
        {title && <Cover img={img} title={"Our Menu"}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2   my-8 gap-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
