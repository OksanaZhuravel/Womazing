import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

export const useCartInfo = () => {
	const cartItems = useSelector((state: RootState) => state.carts.cart);
	const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
	const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

	return { totalPrice, totalQuantity };
};