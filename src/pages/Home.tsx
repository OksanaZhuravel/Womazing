import HomeShop from "../components/Main/HomeShop/HomeShop";
import Importance from "../components/Main/Importance/Importance";
import Promo from "../components/Main/Promo/Promo";
import Teams from "../components/Main/Teams/Teams";

const Home = () => {
  return (
    <>
      <Promo />
      <HomeShop />
      <Importance />
      <Teams />
    </>
  );
};
export default Home;
