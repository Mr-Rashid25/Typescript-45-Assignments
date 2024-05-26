// Assignment No:24. More Conditional Tests:
let str1:string = "Rashid";
let str2:string = "Khan";
let num1:number = 25;
let num2:number = 30;
let arry:string[] = ['a','b','c','d']
console.log("Equality and inequality with strings.");
console.log(str1 === "Rashid");
console.log(str1 === str2);

console.log("Using the lower case function.");
console.log(str1.toLowerCase() !== "Rashid");
console.log(str2.toLowerCase() === "Khan");

console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(num1 === 25);
console.log(num2 !== 30);
console.log(num1 <= num2);
console.log(num1 > num2);

console.log("\nusing 'and' and 'or' operators.");
console.log((num1 < 30) && (num2 > 25));
console.log((num1 > num2) || (num2 < 30));

console.log("Whether an item is in a array?");
console.log(arry.includes('a'));
console.log(arry.includes('B'));

console.log("whether an item is not in a array.");
console.log(!arry.includes('f'));
console.log(!arry.includes('a'));








