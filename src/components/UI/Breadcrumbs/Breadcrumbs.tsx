import { Link, useLocation } from 'react-router-dom';
import { BreadcrumbsProps } from '../../../types/types';


const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ category, title, className }) => {
	const location = useLocation();
	const pathSegments = location.pathname
		.split('/')
		.filter((segment) => segment !== '');

	const breadcrumbs = [
		<Link key='home' to='/' className='text'>
			Главная
		</Link>,
		category && (
			<span key='category' className='text'>
				&nbsp;—&nbsp;
				<Link to={`/category/${category.id}`}>{category.name}</Link>
			</span>
		),
		title && (
			<span key='product' className='breadcrumbs__active text'>
				&nbsp;—&nbsp;
				{title}
			</span>
		),
	];

	return <div className={`breadcrumbs ${className}`}>{breadcrumbs}</div>;
};

export default Breadcrumbs;
