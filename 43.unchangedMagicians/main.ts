// Assignment No:Unchanged Magicians
// Starting from exercise 42
function showMagicians(magicians:string[]){
  magicians.forEach(names => console.log(names));
  
}
// make great function to modify array
function makeGreat(magicians:string[]){
 return magicians.map(names => `The great ${names}`)
}
// defining an array of magicians list
let magiciansNames = ['Ali Raza','Faisal Raja','Naseem','Qasim'];
//Making a copy of orignal Array through slice.() function
let copyMagiciansNames = magiciansNames.slice();

//Modify the copied Array to include 'The great' with thier names
let copyGreatMagicians = makeGreat(copyMagiciansNames)

// print original Array
console.log('\nArray with original names:\n');
showMagicians(magiciansNames);

// print copied Array
console.log("\nArray with 'The great' added names:\n");
showMagicians(copyGreatMagicians);