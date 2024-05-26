// Assignment No:42. Great Magicians
// from exercise 41.
function showMagicians(magicians:string[]){
  magicians.forEach(names => console.log(names));
  
}
// make great function to modify array
function makeGreat(magicians:string[]){
 return magicians.map(name => `The great, ${name.charAt(0).toUpperCase() + name.slice(1)}`)
}
// defining an array of magicians
let magiciansNames = ['ali raza','faisal raja','naseem','qasim'];

// modify names of magicians from makeGreat function
let greatMagicians = makeGreat(magiciansNames);
// call show majicians function to print modify names

showMagicians(greatMagicians);
