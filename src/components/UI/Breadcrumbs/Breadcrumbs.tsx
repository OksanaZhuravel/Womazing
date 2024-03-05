import { Link } from 'react-router-dom';
import { BreadcrumbsProps } from '../../../types/types';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ categories, title, className }) => {
	const breadcrumbs = [
		<Link key='home' to='/' className='text'>
			Главная
		</Link>,
	];
	// console.log(categories);

	if (categories && categories.length > 0) {
		categories.forEach((category, index) => {
			breadcrumbs.push(
				<span key={`category-${index}`} className='text'>
					&nbsp;—&nbsp;
					<Link to={`/shop`}>{category}</Link>
				</span>
			);
		});
	}

	if (title) {
		breadcrumbs.push(
			<span key='product' className='breadcrumbs__active text'>
				&nbsp;—&nbsp;
				{title}
			</span>
		);
	}

	return <div className={`breadcrumbs ${className}`}>{breadcrumbs}</div>;
};

export default Breadcrumbs;
