// Assignment N0:3. Name Cases: 
// lower case
let personName = "Muhammad rashid";
console.log("Lower case:", personName.toLowerCase());
// Uper case
console.log("Upper Case:", personName.toUpperCase());
// Tittle case using regex expression
console.log(`Tittle case:`, personName.replace(/\b\w/g, (char) => char.toUpperCase()));
export {};
