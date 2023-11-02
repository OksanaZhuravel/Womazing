import { Link } from "react-router-dom";

interface TitleProps {
	title: string;
	activeTitle: string;
	activeLink: string;

}
const Title = ({ title, activeTitle, activeLink }: TitleProps) => {
	return (
		<section className="title">
			<div className="title__container">
				<h1 className="title-big title__size">{title}</h1>
				<div className="title__breadcrumbs breadcrumbs">
					<Link key='home' to='/' className="text">
						Главная
					</Link>
					&nbsp;—&nbsp;
					<Link key='shop' to={activeLink} className="breadcrumbs__active text">
						{activeTitle}
					</Link>
				</div>
			</div>
		</section>
	);
}
export default Title;