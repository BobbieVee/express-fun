const _categories = [
	{
		id: 1,
		name: 'Swim',
		products: [
			{
				id: 1,
				name: 'Eye Gogles'
			},
			{
				id: 2,
				name: 'Speedo Suit'
			}
		]


	},
	{
		id: 2,
		name: 'Bike',
		products: [
			{
				id: 1,
				name: 'Cervello P3'
			},
			{
				id: 2,
				name: 'Bullet WaterBottle'
			}
		]
	}
];

const getCategories = ()=> {
	return _categories;
};

const getCategory = (id)=> {
	return getCategories().filter((category) => {
		return id === category.id;
	})[0];
};


module.exports = {
	getCategories: getCategories,
	getCategory: getCategory
};