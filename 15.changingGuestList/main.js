"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  Assignment no 15 : Changing guest list
//Exercise 14
let guestList = ["Shoaib", "Saleem", "Zeeshan", "Farman"];
let notCome = guestList[0];
console.log(`\nUnfortunately Mr. ${notCome} can not come for dinner.\n`);
console.log("=================");
// replacing new guest with the guest who can't come.
guestList.splice(0, 1, "Waseem");
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear Roommate:" +
        guestList[i] +
        ",\nYou are invited for dinner today\nThank you\n");
}
