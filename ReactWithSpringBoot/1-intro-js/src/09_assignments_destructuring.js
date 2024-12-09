const user = {
    username: 'John',
    email: 'john@wick.com',
    age: 34,
    ranking: 9
}

const {username, ranking, age} = user;

console.log(username);
console.log(ranking);
console.log(age);

console.log(`${username} is ${age} years old`);
console.log(user.ranking);
