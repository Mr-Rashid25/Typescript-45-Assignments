// Assignment No:32. Checking Usernames

let currentUsers: string[] = ["Rashid", "Tahir", "Ali", "Adil", "Iqra", "Huma"];
let newUsers: string[] = ["tahir", "Adil", "Asim", "IQRA", "Mutahir", "Hamza"];
newUsers.forEach((newUserChecked) => {
  let ourCondition = currentUsers.some(
    (currentUsersChecked) =>
      currentUsersChecked.toLowerCase() === newUserChecked.toLowerCase()
  );
  if (ourCondition) {
    console.log(
      `User Name: ${newUserChecked} will need to enter a new user name.`
    );
  } else {
    console.log(`User Name: ${newUserChecked} is available.`);
  }
});
