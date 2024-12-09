let products = ['table', 'chair', 'laptop', 'keyboard'];

products.push('lcd screen', 'LG tv');
products = products.concat('Dell laptop');
products = products.concat(['Lenovo laptop', 'Asus Laptop']);

const fruits = ['apple', 'pear', 'peach', 'banana', 'watermelon'];
fruits.push('pineapple');
//const fruits = ['apple', 'pear', 'peach', 'banana', 'watermelon', ...products];

const market = [...products, ...fruits, 'chips', 'grapes'];
const market2 = products.concat(fruits).concat('chips', 'grapes', 'lemons');

console.log(products);
console.log(fruits);
console.log(market);
console.log(market2);
