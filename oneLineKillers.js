// scroll to the top of the page

const toTop = () => window.scrollTo(0, 0);

// strip html from text (when working with user inputs, we may need to strip any html elements in the text we process)

const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';

// reverse a string

const stringReverse = str => str.split('').reverse().join('');

// remove duplicates in an array, this will work when storing primitive data

const array = [1, 2, 3, 4, 2, 5, 3, 1, 9, 5, 8];

const removeDuplicates = arr => [...new Set(arr)];