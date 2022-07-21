// Add storage item

const setToLocalStorage = (key, value) => {
    if (key && typeof key === 'string') {
        typeof value === 'object'
            ? localStorage.setItem(key, JSON.stringify(value))
            : localStorage.setItem(key, value);
    }
}

// Parse storage item

const getFromLocalStorage = key => {
    if (key && typeof key === 'string') {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch {
            return localStorage.getItem(key);
        }
    } else throw new Error('Invalid key');
}

// Usage

setToLocalStorage('user', { name: 'John', username: 'johndoe1' })
const user = getFromLocalStorage('user');
// user => {name: 'John', username: 'johndoe1'}