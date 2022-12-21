// scroll to the top of the page

const toTop = () => window.scrollTo(0, 0);

// smooth scroll to top

const scrollToTop = element => element.scrollIntoView({
    behavior: 'smooth', block: 'start'
});

// scroll to bottom

const scrollToBottom = element => element.scrollIntoView({
    behavior: 'smooth', block: 'end'
})

// strip html from text (when working with user inputs, we may need to strip any html elements in the text we process)

const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';

// generate random string

const randomString = Math.random().toString(36).slice(2);

// generate random color

const generateRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}

// extract domain name from an email

let email = 'xyz@gmail.com';
let getDomain = email.substring(email.indexOf('@') + 1);

// detect dark mode

const isDarkMode = () => window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

// check if an element is focuesd

const elem = document.querySelector('.text-input');
const isFocus = elem == document.activeElement;

// redirecting user

const redirect = url => location.href = url;

// check if a variable is an array

let fruit = 'apple';
let fruits = ['apple', 'banana', 'mango', 'orange'];

const isArray = arr => Array.isArray(arr);
console.log(isArray(fruit));
console.log(isArray(fruits));

// check if an array is empty

let arr1 = [];
let arr2 = [1, 4, 5, 6, 3, 4];

console.log(arr2.length > 0);

// check if an array is empty, part 2

const emptyArr = [];
const flag = Array.isArray(emptyArr) && !emptyArr.length; // flag => true

// reverse a string

const stringReverse = str => str.split('').reverse().join('');

// remove duplicates in an array, this will work when storing primitive data

const array = [1, 2, 3, 4, 2, 5, 3, 1, 9, 5, 8];

const removeDuplicates = arr => [...new Set(arr)];

// Shuffle array

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

// unique elements

const getUnique = arr => [...new Set(arr)];

// copy to clipboard

const copy = text => navigator.clipboard.writeText(text);
copy('nesto za dobro');