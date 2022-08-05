// strings

const names = ['James', 'Anna', 'Adam', 'Colin', 'Rita'];

const sortedNames = names.sort();
const namesReversed = sortedNames.reverse();

// numbers

const numbers = [10, 20, 30, 4, 40, 100, 2];

const sortedNumbers = numbers.sort((a, b) => a - b);

// strings with numbers 

const items = ['Item 3', 'Item 2', 'Item 5', 'Item 1', 'Item 4'];

const sorted = items.sort((a, b) => {
    return +a.slice(-1) - +b.slice(-1);
});

// strings with long numbers

const r = /\d+/;

const itemsLong = [
    'Item 99',
    'Item 1001',
    'Item 5',
    'Item 30',
    'Item 465'
];

const sortedLong = itemsLong.sort((a, b) => {
    return a.match(r) - b.match(r);
});

// objects

const objects = [
    { id: 7, name: 'John' },
    { id: 2, name: 'Grace' },
    { id: 15, name: 'Kim' },
    { id: 6, name: 'Jane' }
]

const sortedObj = objects.sort((a, b) => {
    return a.id - b.id;
})
