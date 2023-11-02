import ShopProducts from "../components/Shop/ShopProducts/ShopProducts";
import Title from "../components/Title/Title";
import Sort from "../components/Sort/Sort";



const Shop = () => {
  return <>
    <Title title="Магазин" activeTitle="Магазин" activeLink='/shop' />
    <Sort />
    <ShopProducts />
  </>

};
export default Shop;
