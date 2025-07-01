import PropTypes from 'prop-types';

export const CompanyView = ({ title, company }) => {

    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item active">Name: {company.name}</li>
                <li className="list-group-item">TaxId: {company.taxId}</li>
            </ul>
        </>
    )
}

CompanyView.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired
};