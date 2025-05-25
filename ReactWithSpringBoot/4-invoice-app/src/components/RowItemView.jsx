export const RowItemView = ({ product, price, quantity }) => {
    return (
        <>
        <tr>
            <td>{product}</td>
            <td>{price}</td>
            <td>{quantity}</td>
        </tr>
        </>
    );
}