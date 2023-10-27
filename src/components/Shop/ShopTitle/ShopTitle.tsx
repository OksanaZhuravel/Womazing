import { Link } from "react-router-dom";


const ShopTitle = () => {
	return (
		<section className="shop-title">
			<div className="shop-title__container">
				<h1 className="title shop-title__title">Магазин</h1>
				<div className="shop-title__breadcrumbs breadcrumbs">
					<Link key='home' to='/' className="text">
						Главная
					</Link>
					&nbsp;—&nbsp;
					<Link key='shop' to='/shop' className="breadcrumbs__active text">
						Магазин
					</Link>
				</div>
			</div>
		</section>
	);
}
export default ShopTitle;