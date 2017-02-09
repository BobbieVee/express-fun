let _categories = [];

const seed = ()=> {

	_categories = [
		{
			id: 1,
			name: 'Swim',
			products: [
				{
					id: 1,
					name: 'Eye Goggles'
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
		},
		{
			id: 3,
			name: 'Run',
			products: [
				{
					id: 1,
					name: 'Alta running shoes'
				},
				{
					id: 2,
					name: 'Racing bib'
				}
			]
		}
	];
};

const getCategories = ()=> {
	return _categories;
};

const getCategory = (id)=> {
	return getCategories().filter((category) => {
		return id === category.id;
	})[0];
};

seed();

const addCategory = (name)=> {
	let newId = getCategories().reduce((max, category)=> {
		return category.id >= max?category.id+1:max;
	},0);
	getCategories().push({"id": newId, "name": name, "products": []})
};

const categoryDelete = (id)=> {
	let delIndex = null;
	getCategories().forEach((category, index)=> {
		if (id === category.id) delIndex = index;
	});
	getCategories().splice(delIndex,1);
};
const productDelete = (catId, id)=> {
	let delIndex = getCategory(catId).products.findIndex((product)=> {
		return product.id === id;
	});
	getCategory(catId).products.splice(delIndex,1)
	console.log('delete product index = ', delIndex)
};

const addProduct = (catId, name) => {
	const id = getCategory(catId).products.reduce((max, product) => {
		return product.id >= max?product.id+1:max;
	},0);
	getCategory(catId).products.push({"id": id, "name": name});
};


module.exports = {
	getCategories: getCategories,
	getCategory: getCategory,
	addCategory: addCategory,
	categoryDelete: categoryDelete,
	productDelete: productDelete,
	addProduct: addProduct,
	seed: seed 
};