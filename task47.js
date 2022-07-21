// Write a function that takes two objects (a,b) as parameters.
// Return true if object a is equal to object b or false otherwise

function myFunction(a, b) {

    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length === bKeys.length) {
        return aKeys.every((key) => {
            return a[key] === b[key];
        });
    }

    return false;
}

// deep check

function myFunction(a, b) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length === bKeys.length) {
        return aKeys.every((key) => {
            if (Array.isArray(a[key])) {
                if (Array.isArray(b[key])) {
                    return myFunction(a[key], b[key])
                }
                return false;
            }
            return a[key] === b[key]
        });
    }
    return false;
}


console.log(myFunction(
    { name: 'Hose', email: 'hose@armando.com' },
    { email: 'hose@armando.com', name: 'Hose' }
));
//true
console.log(myFunction(
    { name: 'Hose', email: 'hose@armando.com' },
    { email: 'hose.armandi@armando.com', name: 'Hose Armandi' }
));
        // false