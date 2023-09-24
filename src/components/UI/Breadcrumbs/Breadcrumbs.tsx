import { Link, useLocation } from 'react-router-dom';
interface BreadcrumbsProps {
	category: {
		id: number;
		name: string;
	};
	title: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ category, title }) => {
	const location = useLocation();
	const pathSegments = location.pathname
		.split('/')
		.filter((segment) => segment !== '');

	const breadcrumbs = [
		<Link key='home' to='/'>
			Главная
		</Link>,
		category && (
			<span key='category'>
				&nbsp;—&nbsp;
				<Link to={`/category/${category.id}`}>{category.name}</Link>
			</span>
		),
		title && (
			<span key='product'>
				&nbsp;—&nbsp;
				{title}
			</span>
		),
	];

	return <div className='breadcrumbs'>{breadcrumbs}</div>;
};

export default Breadcrumbs;
