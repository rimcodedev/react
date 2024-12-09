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

console.log(invoice.company?.name);
console.log(invoice.client?.name);

if(invoice?.company) {
    console.log('There is a company');
} else {
    console.log('There is not a company');
}
