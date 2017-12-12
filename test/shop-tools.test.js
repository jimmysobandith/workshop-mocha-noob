var expect = require('chai').expect;
var getPrices = require('../src/shop-tools').getPrices;
var countArticles = require('../src/shop-tools').countArticles;
const product = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];


describe('Mocha Projet', function() {
    it('Exercice 1: Retourne le prix du marcher', function() {
        expect(getPrices()).to.eql({banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6});
    })
	it('Exercice 2: Retourne le nombre article dans un tableau', function() {
        expect(countArticles(product)).to.eql(10);
    })
});
