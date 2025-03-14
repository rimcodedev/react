import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {

    const invoice = getInvoice();

    return (
        <>
        <h1>Invoice Example</h1>
        <ul>
            <li>Id: {invoice.id}</li>
            <li>Name: {invoice.name}</li>
            <li>Client: {invoice.client.name} {invoice.client.lastname}</li>
            <li>Address: {invoice.client.address.street} {invoice.client.address.number}, {invoice.client.address.city} {invoice.client.address.zip}, {invoice.client.address.country}</li>
        </ul>
        </>
    );
    }

