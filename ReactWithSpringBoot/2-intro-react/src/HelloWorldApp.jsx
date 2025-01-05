import PropTypes from "prop-types";
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";
import { Book } from "./components/Book";

PropTypes.string.isRequired;

export const HelloWorldApp = ({ user, id, title, book }) => {
    // const name = 'Anna';

    console.log(title);

    return (
        <>
            <Title title={ title } />
            <UserDetails user={ user } id={ id } />
            <Book book={book} id={ id } />
        </>
    );
}

HelloWorldApp.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired
    }),
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

HelloWorldApp.defaultProps = {
    title: 'Default title',
    book: 'React for dummies'
}