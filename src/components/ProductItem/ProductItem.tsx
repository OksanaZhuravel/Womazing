import { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { ProductItemProps } from '../../types/types';


const ProductItem = ({ item }: ProductItemProps) => {

	const diccort = 0.9;
	const [selectedSize, setSelectedSize] = useState('M');
	const [selectedColor, setSelectedColor] = useState('#D4D4D4');
	const [quantity, setQuantity] = useState<number | string>(1);
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
	const onCart = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('Product added to cart:', {
			...item,
			selectedSize,
			selectedColor,
			quantity,
		});
	};

	return (
		<div className='product__wrap'>
			<img src={item.images[0]} className='product__img' alt={item.title} />
			<div className='product__boby'>
				<div className='product__prace'>
					<span >
						${(item.price * diccort).toFixed(2)}
					</span>
					<span className='product__discort'>${item.price}</span>
				</div>
				<form action='#' className='product__form'>
					<div className='product__size size'>
						<p className='subtitle-h4'>Выберите размер</p>
						<div className='size__options'>
							{['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
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
					<div className='product__color color '>
						<p className='subtitle-h4'>Выберите цвет</p>
						<div className='color__options'>
							{['#927876', '#D4D4D4', '#FD9696', '#FDC796'].map((color) => (
								<div
									className={`color__item ${selectedColor === color ? 'active' : ''}`}
									key={color}
									onClick={() => handleColorChange(color)}>
									<Input
										className='color__input'
										type='radio'
										value={color}
										id={color}
										name='color'
										checked={selectedColor === color}
										onChange={() => handleColorChange(color)}
									/>
									<label
										htmlFor={color}
										className='color__label'
										style={{ backgroundColor: color }}>
									</label>
								</div>
							))}
						</div>
					</div>
					<div className='product__box'>
						<div className='product__quantity quantity'>
							<Input
								type='number'
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
