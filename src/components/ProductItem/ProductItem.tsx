import { useEffect, useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { ProductItemProps } from '../../types/types';
import { addCart } from '../../state/cart/cartSlice';
import { useDispatch } from "react-redux";
import { AppDispatch } from '../../state/store';


const ProductItem = ({ item }: ProductItemProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const [selectedSize, setSelectedSize] = useState<string>(item.sizes.length > 0 ? item.sizes[1] : '');
	const [quantity, setQuantity] = useState<number | string>(1);
	const [selectedColor, setSelectedColor] = useState<string>('');
	const handleSizeChange = (size: string) => {
		setSelectedSize(size);
	};

	const handleColorChange = (color: string) => {
		setSelectedColor(color);
	};

	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuantity(value);
	};
	const onCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const cartData = {
			id: item.id,
			images: item.images,
			price: item.price,
			title: item.title,
			diccort: item.diccort,
			selectedSize,
			selectedColor,
			quantity: Number(quantity),
		};
		dispatch(addCart(cartData))
	};
	useEffect(() => {
		if (item.colors.length > 0) {
			setSelectedColor(item.colors[0].name);
		}
	}, [item.colors]);

	return (
		<div className='product__wrap'>
			<img src={item.images[0]} className='product__img' alt={item.title} />
			<div className='product__boby'>
				<div className='product__prace'>
					{item.diccort !== null ? (
						<>
							<span>${item.diccort}</span>
							<span className='product__discort'>${item.price}</span>
						</>
					) : (
						<span>${item.price}</span>
					)}
				</div>
				<div className='subtitle-h4'>
					{item.description !== null && (
						<span>{item.description}</span>
					)}
				</div>
				<form action='#' className='product__form'>
					{item.sizes.length > 0 && (
						<div className='product__size size'>
							<p className='subtitle-h4'>Выберите размер</p>
							<div className='size__options'>
								{item.sizes.map((size) => (
									<div
										className={`size__item ${selectedSize === size ? 'active' : ''}`}
										key={size}
										onClick={() => handleSizeChange(size)}>
										<Input
											className='size__input'
											type='radio'
											value={size}
											id={size}
											name='size'
											checked={selectedSize === size}
											onChange={() => handleSizeChange(size)}
										/>
										<label htmlFor={size} className='size__label'>
											<span className='text'>{size}</span>
										</label>
									</div>
								))}
							</div>
						</div>
					)}
					{item.colors.length > 0 && (
						<div className='product__color color '>
							<p className='subtitle-h4'>Выберите цвет</p>
							<div className='color__options'>
								{item.colors.map((color) => (
									<div
										className={`color__item ${selectedColor === color.name ? 'active' : ''}`}
										key={color.value}
										onClick={() => handleColorChange(color.name)}>
										<Input
											className='color__input'
											type='radio'
											value={color.value}
											id={color.name}
											name='color'
											checked={selectedColor === color.value}
											onChange={() => handleColorChange(color.name)}
										/>
										<label
											htmlFor={color.value}
											className='color__label'
											style={{ backgroundColor: color.value }}>
										</label>
									</div>
								))}
							</div>
						</div>
					)}
					<div className='product__box'>
						<div className='product__quantity quantity'>
							<Input
								type='text'
								placeholder='1'
								className='quantity__input text-big'
								value={quantity}
								onChange={handleQuantityChange}
							/>
						</div>
						<Button onClick={onCart} className='button'>
							<span className='button__text'>Добавить в корзину</span>
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default ProductItem;
