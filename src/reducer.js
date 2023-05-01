export const initialState = {
	basket: [],
};
export const actionTypes = {
	ADD_TO_BASKET: 'ADD_TO_BASKET',
	REMOVE_ITEM: 'REMOVE_ITEM',
};
export const reducer = (state, action) => {
	console.log('desde reducer:', action);
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

		default:
			return state;
	}
};
