const fs = require('fs');

fs.writeFile('output.txt', 'Hello My LORD!', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File written successfully!');
});

// Expensive operation
let sum = 0;
for (let i = 0; i < 1e9; i++) {
    sum += i;
}

console.log('Expensive operation finished');