import { getInvoice } from "../services/getInvoice";
import { InvoiceView } from "./InvoiceView";
import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { ListItemsViews } from "./ListItemsViews";

export const InvoiceApp = () => {

    const { id, name, client, company, items } = getInvoice();

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Invoice Example
                    </div>
                    <div className="card-body">
                        <InvoiceView id={ id } name={ name } />

                        <div className="row my-3">
                            <div className="col">
                                <ClientView title="Client data" client={ client } />
                            </div>

                            <div className="col">
                                <CompanyView title="Company data" company={ company } />
                            </div>
                        </div>

                        <ListItemsViews title="Invoice Items" items={ items } />
                    </div>
                </div>
            </div>
        </>
    );
}


