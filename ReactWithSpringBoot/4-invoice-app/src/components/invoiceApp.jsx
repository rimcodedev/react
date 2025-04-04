import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {

    const { id, name, client, company, items } = getInvoice();
    const { name: nameClient, lastname } = client;
    const { street, city, zip, country, number } = client.address;

    return (
        <>
            <h1>Invoice Example</h1>
            <ul>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
                <li>Client: {client.name} {client.lastname}</li>
                <li>Address: {street} {number}, {city} {zip}, {country}</li>
                <li>Company: {company.name}</li>
            </ul>

            <h3>Client data</h3>
            <ul>
                <li>Name and lastname: {nameClient} {lastname}</li>
                <li>City: {city}</li>
                <li>Street: {street}</li>
                <li>Zip: {zip}</li>
                <li>Country: {country}</li>
            </ul>

            <h3>Company data</h3>
            <ul>
                <li>Name: {company.name}</li>
                <li>TaxId: {company.taxId}</li>
            </ul>

            <h4>Invoice Items</h4>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({id, product, price, quantity}) => 
                        (
                            <tr key={id}>
                                <td>{product}</td>
                                <td>{price}</td>
                                <td>{quantity}</td>
                            </tr>
                        )
                   )}
                </tbody>
            </table>
        </>
    );
}

