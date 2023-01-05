console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

console.log('--- 1. Create an object literal to represent you! ---')
/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
//***COMMENTS:
//      an object literal in JS allow us to create objects 
//      which consists of a list of key-value pairs, 
//      each separated by a comma and wrapped inside curly braces
const me = {
  // TODO - add properties here:
  'firstName': 'Xai',
  'lastName': 'Hang',
  'hasSiblings': true,
  'shoeCount': 5,
  'favThreeFoods': ['sushi','noodles','steak']
};
console.log('A little about me:', me);
//  putting all the properties into a sentence: 
console.log(`Hello! My name is ${me.firstName} ${me.lastName}. 
It's ${me.hasSiblings} I have a village full of siblings!
I have ${me.shoeCount} pairs of shoes I love. 
And my three favorite foods are ${me.favThreeFoods[0]}, 
${me.favThreeFoods[1]}, and ${me.favThreeFoods[2]}.`);

console.log('--- 2. Accessing object properties ---')
/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
//***COMMENTS:
//    3 ways to access properties of an object:
//        1. dot property accessor: object.property 
//        2. square brackets property access: object['property']
//        3. object destructuring: const {property} = object
const fullName = me.firstName + ' ' + me.lastName;
console.log('Full name is:', fullName);

console.log('--- 3. Nested arrays ---')
/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log('First favorite food - should be "sushi":', me.favThreeFoods[0]); // 1st food (steak)
console.log('Middle favorite food - should be "noodle":', me.favThreeFoods[1]); // 2nd food (noodle)
console.log('Last favorite food - should be "steak":', me.favThreeFoods[2]); // 3rd food (steak)

console.log('--- 4. Change a property of an existing object. ---')
/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log('---  5. Add a new property to an existing object. ---')
/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/