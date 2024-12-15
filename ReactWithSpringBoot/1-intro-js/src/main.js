import { invoices, paper, invoiceByClientName } from './data/invoices';

const invoicesName = invoices.map(invoice => invoice.name)  

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

//const invoiceByClientName = invoices.find(invoice => invoice.client.name === 'Jhon')
console.log('Find by client name')
console.log('InvoiceByClientName: ' + invoiceByClientName('Jhon'))

const invoiceFilter = invoices.filter(invoice => invoice.id > 1)
console.log('InvoiceFilter: ' + invoiceFilter)

const invoiceFilter2 = invoices.filter(invoice => invoice.items.includes(paper))
console.log('InvoiceFilter2: ' + invoiceFilter2)

console.log('Filter delete')
const invoiceDeleted = invoices.filter(invoice => invoice.id !== 2)
console.log('InvoiceDeleted: ' + invoiceDeleted)

const result = invoices.some(invoice => invoice.id === 3)
console.log('Result: ' + result)
