import { RowItemView } from "./RowItemView";

export const ListItemsViews = ({ title, items }) => {
    return (
        <>
            <h4>{ title }</h4>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({ id, product, price, quantity }) =>
                    (
                        <RowItemView product={product} price={price} quantity={quantity} key={id} />
                    )
                    )}
                </tbody>
            </table>
        </>
    );
}