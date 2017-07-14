var Product = require('../../models/product');

var mongoose = require('mongoose');

//mongoose.connect('localhost:27017/shopping');

//mongoose.Connect('mongodb://localhost:27017/shopping',{config:{autoindex:false}});
var products = [
    new Product({
    imagepath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic Video Game 1',
    description: 'Awesome Game!!!',
    price: 10
}),
new Product({
    imagepath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic Video Game 2',
    description: 'Awesome Game!!!',
    price: 12
}),
new Product({
    imagepath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic Video Game 3',
    description: 'Awesome Game!!!',
    price: 20
}),
new Product({
    imagepath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic Video Game 4',
    description: 'Awesome Game!!!',
    price: 50
}),
new Product({
    imagepath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic Video Game 5',
    description: 'Awesome Game!!!',
    price: 75
}),
]; 
var done = 0;
for(var i=0; i < products.length; i++ ) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        } 
    });
}

function exit() {
    mongoose.disconnect();
}


