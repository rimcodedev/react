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

const invoiceByClientName = (clientName) => {
    return invoices.find(invoice => invoice.client.name === clientName)
}

const invoiceById = (id) => {
    return invoices.find(invoice => invoice.id === id)
}

const findInvoiceById = (id) => {
    const promise = new Promise( (resolve, reject) => {
            setTimeout(() => {
                const result = invoiceById(id);

                if(result) {
                    resolve(result);
                } else {
                    reject('Error with the id');
                }
            }, 2500);
        }
    );
    return promise;
}

export {
    paper, 
    invoices as default, 
    invoiceByClientName, 
    invoiceById,
    findInvoiceById
}
