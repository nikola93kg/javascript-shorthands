// detect click outside, use this method to detect if a user has clicked outside/inside of a target element

const el = document.querySelector('.some-element');

document.addEventListener('click', e => {
    const outside = !el.contains(e.target);
    console.log(outside); //returns boolean
});

// fire events only once (you can add once:true to your event listener to make sure your event will only be triggered once on a given element)
// it is perfect if you don't want your user to be able to perform an action multiple times on a render
// this is a great alternative to removeEventListener, which achieves the same result

const element = document.querySelector('.element');

element.addEventListener('click', () => {
    console.log('Hello');
}, { once: true })

// clone a DOM node

const clone = element.cloneNode(true);
console.log(clone.outerHTML);

// toggle boolean attributes
// this is useful if you want to avoid using both the setAttribute and removeAttribute calls in order to achieve the same result

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    input.toggleAttribute('disabled');
})

// get computed style
// use the getComputedStyle() method when you want to quickly access all of the styles of a given element and their complete values

const something = document.querySelector('.something');

const elementBefore = getComputedStyle(something, ':before');
console.log(elementBefore.content);

// scroll elements into view

const button2 = document.querySelector('button');
const elementP = document.querySelector('p');

button2.addEventListener('click', () => {
    elementP.scrollIntoView({ behavior: 'smooth', block: 'start' }); //block is the final scroll position of the element 
})
