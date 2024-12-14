const user = {
    username: 'John',
    email: 'john@wick.com',
    age: 34,
    ranking: 9
}

const detail = ({username, email}) => {
    console.log(`Detail of the user ${username} with email ${email}`);
}

detail(user);