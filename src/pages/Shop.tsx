import ShopProducts from "../components/Shop/ShopProducts/ShopProducts";
import Title from "../components/Title/Title";
import Sort from "../components/Sort/Sort";
import { useState } from "react";



const Shop = () => {
  const [currentRange, setCurrentRange] = useState("all");
  const handleSortChange = (range: string) => {
    setCurrentRange(range);
  };
  return <>
    <Title title="Магазин" activeTitle="Магазин" activeLink='/shop' />
    <Sort onSortChange={handleSortChange} />
    <ShopProducts currentRange={currentRange} />
  </>

};
export default Shop;
