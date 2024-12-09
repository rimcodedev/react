const invoice = {
    id: 10,
    name: 'Office material', 
    date: new Date(),
    client: {
        id: 2,
        name: 'Jhon',
        lastname: 'Doe',
        age: 20
    },
    items: [
        {
            product: 'Keyboard',
            price: 5,
            amount: 3,
        }, 
        {
            product: 'Mouse',
            price: 5,
            amount: 2,
        }, 
        {
            product: 'Paper',
            price: 10,
            amount: 1,
        },
    ], 
    total: function() {
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price * item.amount;
            }
        );
        return total;
    }, 
    greeting: function() {
        return `Hello ${this.client.name}`;
    }
};

invoice.client.name = 'Elon';
//invoice.total = 5000;
//console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);

console.log('Total: ' + invoice.total());