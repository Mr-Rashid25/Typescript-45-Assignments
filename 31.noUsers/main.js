// Assingment No:31.No Users
// I will start this prog from // Assignment No:30. Hello Admin.
let userNames = ["Admin", "Rashid", "Tahir", "Adil", "Iqra"];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let i = 0; i < userNames.length; i++) {
        if (userNames[i] === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
        }
    }
}
// Remove all of the usernames from  array
userNames = [];
console.log(`All users has been removed from array. \nArray length is: ${userNames.length}`);
export {};
