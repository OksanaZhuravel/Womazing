import Promo from "../components/Main/Promo/Promo";

const Home = () => {
  return (
    <>
      <Promo />
      <section className="home-shop" id="shop" >
        <div className="home-shop__container">
          <h2 className="home-shop__title">Новая коллекция</h2>
        </div>
      </section>
    </>
  );
};
export default Home;
