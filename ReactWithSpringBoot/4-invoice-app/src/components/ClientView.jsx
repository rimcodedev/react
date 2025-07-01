import PropTypes from 'prop-types';

export const ClientView = ({ title, client }) => {

    const { name: nameClient,
        lastname,
        address: {
            street,
            city,
            zip,
            country } 
    } = client;

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

ClientView.PropTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired
};