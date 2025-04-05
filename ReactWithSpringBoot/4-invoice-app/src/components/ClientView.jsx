export const ClientView = ({title, client}) => {

    const { name: nameClient, lastname } = client;
    const { street, city, zip, country } = client.address;

    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item active">Name and lastname: {nameClient} {lastname}</li>
                <li className="list-group-item">Country / City: {country} / {city}</li>
                <li className="list-group-item">Street: {street}</li>
                <li className="list-group-item">Zip: {zip}</li>
            </ul>
        </>
    )
}