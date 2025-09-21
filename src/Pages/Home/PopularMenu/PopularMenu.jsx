import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState,useEffect } from 'react';
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu]=useState([])

    useEffect(() => {
   fetch("menu.json")
   .then(res=> res.json())
   .then(data=> {
    const popularItems = data.filter(item=> item.category === "popular")
    setMenu(popularItems)
   })
    
    },[] )
    
    return (
   <section className="px-4">
    <SectionTitle
    subHeading={"---Check it out---"}
    heading={"FROM OUR MENU"}
    ></SectionTitle>

    <div className="grid grid-cols-1 md:grid-cols-2   my-8 gap-5">
        {
            menu.map(item =><MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)
        }
    </div>

   </section>
    );
};

export default PopularMenu;