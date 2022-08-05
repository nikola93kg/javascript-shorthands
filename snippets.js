// check if bottom of page is visible, use it to adjust some css once the user reaches the bottom of the page

const bottomVisible = () =>
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible() //true or false

// defer function calls, use it to delay the execution of a function until after the current call stack is empty

const addFive = (item) => console.log(item + 5);

const deferFunction = (fn, ...args) => setTimeout(fn, 1, ...args);
deferFunction(addFive, 25);

console.log(1);
console.log(2);

// get initials from name

const user = 'Robin van Persie';

const getInitials = (string = '') =>
    string
        .split(' ')
        .map(([firstLetter]) => firstLetter)
        .filter((_, index, array) => index === 0 || index === array.length - 1)
        .join('').toUpperCase()

console.log(getInitials(user))

// split array into pairs, use it to simulate pagination features, or to just organize data into groups

const splitIntoPairs = (arr, pairCount) => {
    const result = [];
    for (let i = 0; i < arr.length; i += pairCount) {
        result.push(arr.slice(i, i + pairCount));
    }
    return result;
}

let myItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(splitIntoPairs(myItems, 3));

// get mouse position

const text = document.querySelector('.mainText');
const mainContainer = document.querySelector('.container');

mainContainer.addEventListener('mousemove', runEvent);

function runEvent(e) {
    e.preventDefault();
    // print coordinates of the mouse on move on the targeted element
    text.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
    // change bg color taking the coordinates as values of rgb
    document.body.style.backgroundColor = `rgb(${e.offsetX}, 180, ${e.offsetY})`
}

// generate random string id

const uniqueId = crypto.randomUUID();

console.log(uniqueId);

// generate random pass

const random = Math.random();
const alphanumeric = random.toString(36);
const randomPass = alphanumeric.slice(2);