// Assignment No:44. Sandwiches
//making a function with a rest parameter that accept multiple arguments
function Sandwiches (...items:string[]){
  console.log("This sandwich is made with the following items added:");
  
  items.forEach(oneItem => console.log('>' + oneItem));
  console.log("Enjoy your sandwich please.\n");
  
}
//calling the function 3 times with multiple arguments
Sandwiches('Chicken','Bread','Mayo','Salad');
Sandwiches('Butter','Vegitable');
Sandwiches('Bread','Butter','Cheese','Tomato','ketchup','Chicken','Lettuce');