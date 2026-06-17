const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const cleanedData = data.replace(/\s+/g, " ").trim();
    fs.writeFile("input.txt", cleanedData, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }

        console.log("File cleaned successfully!");
    });
});