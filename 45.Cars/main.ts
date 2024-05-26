// Assignment No:45. Cars

function cars (manufacturer:any, modelName:any, ...optional:any[]){
  //Initialize a object
  let car:any = {
    manufacturer: manufacturer,
    modelName: modelName,
  };
  //Adding additional option to the object
  optional.forEach(option => {
    let [key , value] = option.split(":");
    car [key.trim()] = value.trim();
  });
  return car;
}
// calling function and storing its value in a variable
let mycars = cars('Honda','Civic');
let mycars2 = cars('Suzuki','Swift','Model:2023','Markets : Global','Hatchback:true','AutoPilot : No')

console.log(mycars);
//print with multiple arguments
console.log(mycars2);

