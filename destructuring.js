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

// destructure function

const activity = { name: "Workout", duration: 45 }

const getDuration = ({ duration }) => {
    console.log(duration);
}

getDuration(activity)

// nested destructuring function

const activities = {
    types: {
        short: 30,
        long: 60,
    },
}

const { types: { short } } = activities;
console.log(activities) // 30


// removing object properties

const userData = {
    name: 'John',
    email: 'john@doe.com',
    superSecretKey: 'PEKMEZNALEB',
}

const { superSecretKey, ...secureData } = userData;

console.log(secureData);