import { getInvoice } from "./services/getInvoice";
import { InvoiceView } from "./components/InvoiceView";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { ListItemsViews } from "./components/ListItemsViews";
import { TotalView } from "./components/TotalView";
import { useState } from "react";

export const InvoiceApp = () => {

    const { id, name, client, company, items: itemsInitial, total } = getInvoice();

    const [productValue, setProductValue] = useState("");
    const [priceValue, setPriceValue] = useState(0);
    const [quantityValue, setQuantityValue] = useState(0);

    const [items, setItems] = useState(itemsInitial);

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Invoice Example
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">
                                <ClientView title="Client data" client={client} />
                            </div>

                            <div className="col">
                                <CompanyView title="Company data" company={company} />
                            </div>
                        </div>

                        <ListItemsViews title="Invoice Items" items={items} />
                        <TotalView total={total} />

                        <form className="w-50" onSubmit={event => {
                                event.preventDefault();
                                setItems([
                                    ...items,
                                    {
                                        key: 4,
                                        product: productValue,
                                        price: priceValue,
                                        quantity: quantityValue
                                    }
                                ]);
                                }
                            }>
                            <input type="text" name="product" placeholder="Product" className="form-control m-3"
                                onChange={event => { console.log(event.target.value);
                                                    setProductValue(event.target.value);
                                 }} />
                            <input type="text" name="price" placeholder="Price" className="form-control m-3"
                                onChange={event => { console.log(event.target.value);
                                                    setPriceValue(event.target.value);

                                }} />
                            <input type="text" name="quantity" placeholder="Quantity" className="form-control m-3"
                                onChange={event => { console.log(event.target.value);
                                                    setQuantityValue(event.target.value);
                                 }} />
                            <button type="submit" className="btn btn-primary m-3">Add Item</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}


