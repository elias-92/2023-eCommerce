export const initialState = {
	basket: [],
	user: null,
	shippingData: {},
};
export const actionTypes = {
	ADD_TO_BASKET: 'ADD_TO_BASKET',
	REMOVE_ITEM: 'REMOVE_ITEM',
	SET_USER: 'SET_USER',
	SIGN_OUT: 'SIGN_OUT',
	SET_SHIPPING_DATA: 'SET_SHIPPING_DATA',
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

		default:
			return state;
	}
};
