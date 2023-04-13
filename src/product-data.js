import nikeShoes from './assets/img/nikeShoes.jpg';
import coffeMaker from './assets/img/coffeeMaker.jpg';
import macBook from './assets/img/macbook.jpg';
import sweater from './assets/img/sweater.jpg';

const products = [
	{
		id: 1,
		name: 'Shoes',
		productType: 'Running shoes',
		price: 50,
		rating: 4,
		image: nikeShoes,
		description:
			'Nike Air technology uses a compressed air unit in the sole of the shoe to provide additional cushioning and improve user comfort during physical activity.',
	},
	{
		id: 2,
		name: 'Macbook',
		productType: 'Apple MacBook',
		price: 1000,
		rating: 4,
		image: macBook,
		description:
			'Apple M1 is a highly efficient and powerful processor designed specifically for use in Mac devices. It offers an integrated CPU and GPU, as well as unified RAM, enabling fast and efficient performance. In addition, it is designed to be highly energy efficient, resulting in longer battery life in devices that use it.',
	},
	{
		id: 3,
		name: 'Coffee Maker',
		productType: 'L14dc19 Black Edition',
		price: 28,
		rating: 3,
		image: coffeMaker,
		description:
			'Black coffee maker with an elegant and modern look, ideal for kitchens with minimalist or contemporary designs. It is drip type and has a filter to prepare the best coffees.',
	},
	{
		id: 4,
		name: 'Sweater',
		productType: 'Wool Sweater',
		price: 20,
		rating: 5,
		image: sweater,
		description:
			'Beautiful wool sweater of very good quality is knitted by hand, ideal for winter.',
	},
];

export default products;
