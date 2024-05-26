// Assignment No:17. Shrinking Guest List:

//Start From Assignment No 16:

let guestList: String[] = ["Shoaib", "Saleem", "Zeeshan", "Farman"];
let notCome = guestList[0];
console.log(`\nUnfortunately Mr. ${notCome} can not come for dinner.\n`);
// replacing new guest waseem with shoib at start of array
guestList.splice(0, 1, "Waseem");
// announcement for big table
console.log("\nGood News! we found a bigger dinner table.\n");
// adding guest in starting index of array
guestList.unshift("Ali");
//adding guest in ending index of array
guestList.push("Anas");

// making a veriable for storing a middile index in array
let middleIndex: number = Math.floor(guestList.length / 2);
// adding guest in middle index of array
guestList.splice(middleIndex, 0, "Raqeeb");

// invitaion message for each guest
for (let i = 0; i < guestList.length; i++) {
  console.log(
    "dear Roommate:" + guestList[i] + ",\nI invite you for dinner today.\n"
  );
}

// Announcement: that inviting only two guest
console.log(
  "\nUnfortunately, the new dinner table could not be arranged on time, so I will only be inviting two guests.\n"
);

// using while loop to remove guest
while (guestList.length > 2) {
  let removeGuest = guestList.pop();
  console.log(
    `Sorry dear friend: ${removeGuest} You are not invited to dinner due to the unavailability of a large dinner table.`
  );
}

// inviting remaining 2 guest
console.log(`\nInvitation message to two remaining guest.\n`);
let twoGuest:number = guestList.length
guestList.forEach((twoGuest) =>
  console.log(`Fortunately, ${twoGuest} you are still invited for dinner.`)
);
// Remove the last two names from  list by using splice method
guestList.splice(0, 2);
console.log('Empty array:' , guestList);