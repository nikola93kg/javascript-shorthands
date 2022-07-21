
// a practical way to use the Promise.race() method is to set a time limit for a given task
// By using the code below, we can run a race between our timer Promise and the actual request we want to make

const fakeFetch = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 6000)
})
const timer = timeout => new Promise((_resolve, reject) => {
    setTimeout(() => reject(new Error('Time limit exceeded!')), timeout)
})

Promise.race([fakeFetch(), timer(7000)])
    .then(() => console.log('Success, with time limit'))
    .catch(console.error)

// avoid nested promises

const sayWords = async () => {
    const sayWord = (greet) => {
        return greet;
    }
    try {
        console.log(await sayWord('Hello'));
        console.log(await sayWord('There'));
        console.log(await sayWord('Everyone'));
    } catch (err) {
        console.error(err)
    }
}

// using Promise.all() when you want to run multiple promises and wait for them all to be
// resolved successfully. If one of them fails, the whole operation will be rejected
// use Promise.allSettled() if you want to avoid having your promise rejected just for one failed

const sayName = () => Promise.resolve("David");
const sayJavaScript = () => Promise.resolve("Javascript");
const sayHello = () => new Promise(resolve => resolve('Hello!'));

Promise.all([sayHello(), sayName(), sayJavaScript()])
    .then(([greeting, firstname, language]) => {
        console.log(`${greeting} ${firstname} learns ${language}`);
    });


// using two callbacks in a .then block

const failOnPurpose = () => new Promise((resolve, reject) => {
    reject('Yikes!');
});

failOnPurpose()
    .then(
        () => 'Promise Success!', // first callback (onfulfilled)
        (err) => console.error(err) // second callback (onrejected)
    )


// using Promise.any()

const p1 = new Promise((res, rej) => setTimeout(() => res('Hello'), 500));
const p2 = new Promise((res, rej) => setTimeout(() => res('World'), 100));
const p3 = new Promise((res, rej) => rej('P3 fail!'));

const promises = [p1, p2, p3];

Promise.any(promises)
    .then(firstResult => { console.log(firstResult) })
    .catch(errors => { console.log(errors) })
