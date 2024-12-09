const products = ['table', 'chair', 'laptop', 'keyboard'];

products.push('lcd screen', 'LG tv');

products.forEach(function(element) {
        console.log(element);
    }
);

console.log(' === ');
products.forEach(element => console.log(element));

console.log(' *** ');
for(const product of products) {
    console.log(product);
}

console.log(' --- ');
for(let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log(`index: ${index}, value: ${element}`);
}

console.log(`Product 3: ${products[3]}`);
