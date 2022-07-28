// scroll to the top of the page

const toTop = () => window.scrollTo(0, 0);

// strip html from text (when working with user inputs, we may need to strip any html elements in the text we process)

const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';

// reverse a string

const stringReverse = str => str.split('').reverse().join('');

// remove duplicates in an array, this will work when storing primitive data

const array = [1, 2, 3, 4, 2, 5, 3, 1, 9, 5, 8];

const removeDuplicates = arr => [...new Set(arr)];

// generate random string

const randomString = Math.random().toString(36).slice(2);

// extract domain name from an email

let email = 'xyz@gmail.com';
let getDomain = email.substring(email.indexOf('@') + 1);

// detect dark mode

const isDarkMode = window.matchMedia &&
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

// copy to clipboard

const copy = text => navigator.clipboard.writeText(text);
copy('nesto za dobro');
