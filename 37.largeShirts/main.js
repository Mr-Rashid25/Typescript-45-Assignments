// Assignment No:37. Large Shirts
function makeShirt(size = 'large', message = 'I love TypeScript') {
    console.log(`I make a ${size} size T-shirt wth a message ${message} printed on it.`);
}
// calling function
makeShirt();
// calling function with medium size and default print message
makeShirt('medium');
// calling function with small size and also with new message
makeShirt("'small'", "'I love coding at GIAIC'");
export {};
