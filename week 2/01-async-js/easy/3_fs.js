const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("File contents:");
    console.log(data);
});

// Expensive operation
let sum = 0;
for (let i = 0; i < 1e9; i++) {
    sum += i;
}

console.log("Expensive operation finished");