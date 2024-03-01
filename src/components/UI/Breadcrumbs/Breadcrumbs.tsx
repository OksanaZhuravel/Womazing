import { Link } from 'react-router-dom';
import { BreadcrumbsProps } from '../../../types/types';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ categories, title, className }) => {
	const breadcrumbs = [
		<Link key='home' to='/' className='text'>
			Главная
		</Link>,
	];
	// console.log(categories);

	if (Array.isArray(categories) && categories.length > 0) {
		categories.forEach((category: { idCat: number, name: string }, index: number) => {
			breadcrumbs.push(
				<span key={`category-${index}`} className='text'>
					&nbsp;—&nbsp;
					<Link to={`/category/${category.idCat}`}>{category.name}</Link>
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
