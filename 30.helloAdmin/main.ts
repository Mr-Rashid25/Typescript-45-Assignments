// Assignment No:30. Hello Admin.

let userNames:string[] = ['Admin','Rashid','Tahir','Adil','Iqra']
for(let i=0; i<userNames.length; i++){
  if(userNames[i] === 'Admin'){
  console.log("Hello Admin, would you like to see a status report?");

  }else{
    console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    
  }
}