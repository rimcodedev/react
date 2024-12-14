const users = ['john', 'peter', 'ana', 'maria', 'cameron', 'roger', 'jennifer', 'amy', 'will']

const [john, b, ana, ...rest] = users;

console.log(john, b, ana, ...rest);
