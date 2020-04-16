// Object property shorthand

const name = 'Yash'
const userAge = 25

const user = {
	name,
	age      : userAge,
	location : 'San Francisco'
}

console.log(user)

// Object destructuring

const product = {
	label     : 'Red notebook',
	price     : 3,
	stock     : 201,
	salePrice : undefined,
	rating    : 4.2
}

// const label = product.label
// const stock = product.stock

const { label: ProductLabel, stock, rating = 5 } = product

console.log(ProductLabel, stock, rating)

const transaction = (type, { label, stock } = myProduct) => {
	console.log(type, label, stock)
}

transaction('order', product)
