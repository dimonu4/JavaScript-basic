'use strict';

// В стиле ES-5
function Product(name,price){
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function(discount){
    this.price = this.price - (this.price * discount / 100);
};

let product1 = new Product("toy", 100);
product1.make25PercentDiscount(25);
console.log(product1);

// В стиле ES-6
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount(discount){
        this.price = this.price - (this.price * discount / 100);
    }
}

let product1 = new Product("toy", 100);
product1.make25PercentDiscount(25);
console.log(product1);