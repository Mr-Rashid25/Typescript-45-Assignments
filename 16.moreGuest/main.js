"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Assignment No 16: More guest 
// start from exercise 15
let guestList = ["Shoaib", "Saleem", "Zeeshan", "Farman"];
let notCome = guestList[0];
console.log(`\nUnfortunately Mr. ${notCome} can not come for dinner.\n`);
// replacing new guest waseem with shoib at start of array
guestList.splice(0, 1, "Waseem");
// announcement for big table
console.log("\nGood News! we found a bigger dinner table.\n");
// adding guest in starting index of array
guestList.unshift("Ali");
//adding guest in ending index of array
guestList.push('Anas');
// making a veriable for storing a middile index in array
let middleIndex = Math.floor(guestList.length / 2);
// adding guest in middle index of array
guestList.splice(middleIndex, 0, "Raqeeb");
// invitaion message for each guest
for (let i = 0; i < guestList.length; i++) {
    console.log('dear Roommate:' + guestList[i] + ',\nI invite you for dinner today.\n');
}
