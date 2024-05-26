// Assignment No:33. Ordinal Numbers
let ordNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// Using for loop
for (let i = 0; i < ordNumbers.length; i++) {
    if (ordNumbers[i] == 1) {
        console.log(`${ordNumbers[i]}st`);
    }
    else if (ordNumbers[i] == 2) {
        console.log(`${ordNumbers[i]}nd`);
    }
    else if (ordNumbers[i] == 3) {
        console.log(`${ordNumbers[i]}rd`);
    }
    else if (ordNumbers[i] >= 4 && ordNumbers[i] <= 9) {
        console.log(`${ordNumbers[i]}th`);
    }
}
export {};
