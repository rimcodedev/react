export const invoice = {
    id: 10,
    name: 'Computer components',
    client: {
        name: 'John',
        lastname: 'Doe',
        address: {
            street: 'Main St',
            city: 'Boston',
            zip: '02101',
            country: 'USA',
            number: 12
        }
    },
    company: {
        name: 'ACME Inc',
        taxId: '123456789'
    },
    items: [
        {
            id: 1,
            product: 'Motherboard ASUS',
            price: 150,
            quantity: 1
        },
        {
            id: 2,
            product: 'CPU Intel i7',
            price: 250,
            quantity: 3
        },
        {
            id: 3,
            product: 'Asus Monitor 24',
            price: 175,
            quantity: 5
        }
    ]
}