const person = {
    name: 'John',
    lastname: 'Coltrane',
    age: 42,
    address: {
       number: '1511',
       street: 33,
    }
};

// Atribuição via desestruturação //

const { name, lastname, ...rest} = person;
console.log(person.name, lastname, rest);


/*const { address: { street, number}, address } = person;
console.log(street, number, address);*/


/*
console.log(`Name: ${person.name}`);
console.log(`Last name: ${person.lastname}`);
console.log(`Age: ${person.age} years`);
const { address: {street, number} } = person;
console.log(`Number: ${number}`);
console.log(`Street: ${street}`);*/































