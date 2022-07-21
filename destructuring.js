// array destructuring

const animalNames = ['Rex', 'Lola'];
const [dogName, catName] = animalNames;

// object destructuring

const dog = {
    name: 'Rex',
    age: 5,
    breed: 'Bernese Mountain Dog'
}

const { name, age, breed } = dog;

const cat = {
    name: 'Lola',
    age: 2,
    breed: 'Ragdoll'
}

const { ...rest } = cat;

// change the name of the variables

const car = {
    brand: 'BMW',
    model: '320D',
    color: 'black'
}

const { brand: carBrand, model, color } = car;

// removing an object from an array

const data = [
    { id: 1, name: 'Hose Armando' }, //this will be the oneItem
    { id: 2, name: 'Ilija Bokser' },
    { id: 3, name: 'Kum Kameni' },
]

const [oneItem] = data.splice(0, 1)

// swapping variables

let carName = 'Mercedes';
let bikeName = 'Honda';

[carName, bikeName] = [bikeName, carName];

console.log(carName);

// nested destructuring

const nestedArray = [1, [7, 5], [3, 2, 0], 'kobas'];
const [first, [second, third], fourth, kobas] = nestedArray;
console.log(kobas);