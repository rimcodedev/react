import PropTypes from "prop-types";

PropTypes.string.isRequired;

export const HelloWorld = ({ user, id, title = 'Hello World!' }) => {
    // const name = 'Anna';

    console.log(title);

    return (
        <>
            <h1>{title}</h1>
            <p>Welcome user {user.name} with the id {id}</p>
        </>
    );
}

HelloWorld.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired
    }),
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}