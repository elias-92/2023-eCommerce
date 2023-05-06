export const initialState = {
	basket: [],
	user: null,
	shippingData: {},
	paymentMessage: '',
};
export const actionTypes = {
	ADD_TO_BASKET: 'ADD_TO_BASKET',
	REMOVE_ITEM: 'REMOVE_ITEM',
	EMPTY_BASKET: 'EMPTY_BASKET',
	SET_USER: 'SET_USER',
	SIGN_OUT: 'SIGN_OUT',
	SET_SHIPPING_DATA: 'SET_SHIPPING_DATA',
	SET_PAYMENT_MESSAGE: 'SET_PAYMENT_MESSAGE',
};
export const getBasketTotal = (basket) =>
	basket?.reduce((acc, item) => item.price + acc, 0);

export const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case 'REMOVE_ITEM':
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			const newBasket = [...state.basket];
			if (index >= 0) {
				newBasket.splice(index, 1);
			}
			return {
				...state,
				basket: newBasket,
			};
		case 'EMPTY_BASKET':
			return {
				...state,
				basket: action.basket,
			};
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'SIGN_OUT':
			return {
				...state,
				basket: action.basket,
				user: action.user,
			};
		case 'SET_SHIPPING_DATA':
			return {
				...state,
				shippingData: action.shippingData,
			};
		case 'SET_PAYMENT_MESSAGE':
			return {
				...state,
				paymentMessage: action.paymentMessage,
			};

		default:
			return state;
	}
};
