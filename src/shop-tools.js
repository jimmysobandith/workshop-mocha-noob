const product = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];

exports.getPrices = function()
{
	return {banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6};
}

exports.countArticles = function(product)
{
	return product.length;
}