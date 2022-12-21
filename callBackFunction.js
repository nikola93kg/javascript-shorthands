// calculator function takes three parameters in which there are two numbers
// third parameter is a function that is known as callBack function


function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

function display(output) {
    console.log(output);
}

calculator(5, 7, display);



// example without callBack function

function calc(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function display(output) {
    console.log(output);
}

let result = calculator(5, 7);

display(result);