import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { deleteCart, updateCart } from '../state/cart/cartSlice';

export const useCartInfo = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state: RootState) => state.carts.cart);

	const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
	const totalPrice = cartItems.reduce((total, item) => {
		const itemTotal = item.price * item.quantity;
		return total + itemTotal;
	}, 0);

	const updateQuantity = (itemId: number, newQuantity: number) => {
		dispatch(updateCart({ itemId, newQuantity }));
	};
	const deleteItemCart = (itemId: number) => {
		dispatch(deleteCart({ itemId }));
	};

	return { totalPrice, totalQuantity, updateQuantity, deleteItemCart };
};
