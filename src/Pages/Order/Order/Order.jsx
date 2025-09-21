import { Helmet } from "@vuer-ai/react-helmet-async";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import {useParams} from "react-router-dom"
import "react-tabs/style/react-tabs.css";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "./../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
const Order = () => {
  const [menu] = useMenu();
  const {category}= useParams();
  console.log(category)
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover img={orderCoverImg} title={"OUR SHOP"}></Cover>
      <div className="flex  justify-center my-5">
        <Tabs>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
         <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
           <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
