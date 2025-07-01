import { getInvoice } from "./services/getInvoice";
import { InvoiceView } from "./components/InvoiceView";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { ListItemsViews } from "./components/ListItemsViews";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {

    const { id, name, client, company, items, total } = getInvoice();

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
                        <TotalView total = { total } />
                    </div>
                </div>
            </div>
        </>
    );
}


