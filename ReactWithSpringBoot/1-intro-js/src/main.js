const paper = {
    product: 'Paper',
    price: 100,
    amount: 10,
}

const invoices = [
    {
        id: 1,
        name: 'Stationery', 
        client: {
            name: 'Jhon',
            lastname: 'Doe',
        },
        items: [
            {
                product: 'Envelopes',
                price: 5,
                amount: 3,
            }, 
            {
                product: 'Notebooks',
                price: 5,
                amount: 2,
            }, 
            paper,
        ] 
    }, 
    {
        id: 2,
        name: 'IT material', 
        client: {
            name: 'Peter',
            lastname: 'Doe',
        },
        items: [
            {
                product: 'Keyboard',
                price: 5,
                amount: 3,
            }, 
            {
                product: 'Screen 17',
                price: 5,
                amount: 2,
            }, 
            {
                product: 'Intel i7',
                price: 10,
                amount: 1,
            },
        ] 
    }, 
    {
        id: 3,
        name: 'Office material', 
        client: {
            name: 'Ana',
            lastname: 'Doe',
        },
        items: [
            {
                product: 'Pencil',
                price: 5,
                amount: 30,
            }, 
            paper,
        ] 
    }    
];

const invoicesName = invoices.map(invoice => {
        return invoice.name;
    }
)

console.log(invoicesName)
console.log(invoices)

const invoicesClients = invoices.map(invoice => {
    return invoice.client.name;
}
)

console.log(invoicesClients)

const invoiceById = invoices.find(invoice => invoice.id === 3)
console.log('InvoiceById: ' + invoiceById)

const invoiceByName = invoices.find(invoice => invoice.name === 'Office material')
console.log('InvoiceByName: ' + invoiceByName)

const invoiceFilter = invoices.filter(invoice => invoice.id > 1)
console.log('InvoiceFilter: ' + invoiceFilter)

const invoiceFilter2 = invoices.filter(invoice => invoice.items.includes(paper))
console.log('InvoiceFilter2: ' + invoiceFilter2)

const result = invoices.some(invoice => invoice.id === 3)
console.log('Result: ' + result)