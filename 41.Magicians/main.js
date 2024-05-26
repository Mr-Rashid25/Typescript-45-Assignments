// Assignment No:41. Magicians
function showMagicians(magician) {
    magician.forEach(names => console.log(names.charAt(0).toUpperCase() + names.slice(1)));
}
//define an array
let magicianNames = ['ali Raza', 'faisal Raja', 'naseem', 'qasim'];
showMagicians(magicianNames);
export {};
