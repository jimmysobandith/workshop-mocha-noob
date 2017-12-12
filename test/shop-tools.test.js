var expect = require('chai').expect;
var getPrices = require('../src/shop-tools').getPrices;

describe('Function retourne prix', function() {
    it('Retourne le prix du marcher', function() {
        expect(getPrices()).to.eql({banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6});
    })
});
