	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactoseFree: true,
		nutFree: true,
    organic: true,
		price: 1.99
	},
	{
		name: "bread",
		lactoseFree: true,
		nutFree: true,
    organic: true,
		price: 2.35
	},
	{
		name: "salmon",
		lactoseFree: true,
		nutFree: true,
    organic: true,
		price: 10.00
	},
  {
    name: "Lactose Free Milk 2%",
		lactoseFree: true,
		nutFree: true,
    organic: false,
		price: 4.99
  },
  {
    name: "Almond Milk",
		lactoseFree: true,
		nutFree: false,
    organic: true,
		price: 5.99
  },
    {
    name: "Cheese",
		lactoseFree: false,
		nutFree: true,
    organic: true,
		price: 7.99
  },
  {
    name: "Granola Bar 20pc",
	  lactoseFree: true,
		nutFree: false,
    organic: false,
		price: 6.49
  },
  {
    name: "Frozen Pizza",
		lactoseFree: false,
		nutFree: true,
    organic: false,
		price: 6.99
  },
  {
    name: "Yogurt",
		lactoseFree: false,
		nutFree: true,
    organic: true,
		price: 5.99
  },
  {
    name: "Lactose Free Yogurt",
		lactoseFree: true,
		nutFree: true,
    organic: false,
		price: 5.99
  },
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, lactoseRestrict, nutRestrict, organicRestrict) {
	let product_names = [];
  prods.sort(function(x,y){return x.price - y.price})
	for (let i=0; i<prods.length; i+=1) {
		if(!(lactoseRestrict && !prods[i].lactoseFree) && !(nutRestrict && !prods[i].nutFree) && !(organicRestrict && !prods[i].organic)){
			product_names.push(prods[i].name + " @ $" +prods[i].price);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
					if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}

	}
	return totalPrice;
}
