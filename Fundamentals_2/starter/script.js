// Activate Strict Mode
`use strict`;
/*
function logger () {
    console.log(`My name is Kevin`);
}

// Calling / running / invoking function
logger();

// Things inside the paramters are variables that get's defined when we invoke the function.
// function fruitProcessor (apples, oranges) {
//     const juice = `Juice with ${apples} apples & ${oranges} oranges.`;
//     return juice;
// }

// // Apples becomes 5 and Oranges 0
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)

// const multiJuice = fruitProcessor(4, 4);
// console.log(multiJuice);


// Function declaration
function calcAge1 (birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(1994);

// Functions without a name is called an anonymous function
// Function expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1968);
console.log(age1, age2)

// We can call function declaration before we define the function, we can't do that with function expressions.

// Arrow Function
// Easier and faster to write and read
const calcAge3 = birthYear => 2022 - birthYear;

console.log(calcAge3(1988));

// Arrow Functions can also get more complex if we have more parameters
const yearsUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1994));

const yearsUntilRetirement1 = (birthYear1, firstName) => {
    const age1 = 2022 - birthYear1;
    const retirement1 = 65 - age1;
    return `${firstName} retires in ${retirement1} years!`;
}

console.log(yearsUntilRetirement1(1994, `Kevin`));
console.log(yearsUntilRetirement1(1996, `Steven`));

// Calling Functions from other functions

// Let's create a function that cuts a fruit into mutliple pieces
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// Array Lection
// That's how I learned it so far but seems like a waste of code to create so many variables for almost the same things
const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;
console.log(friend1, friend2, friend3);

// Now let's use an array to fulfill our needs
const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);
console.log(friends[2]); // Peter is the output

// Another way to write an array
const years = new Array(1991, 1984, 1994, 2022);

// Now let's chance a friend cus we've lost one but found another one
friends[2] = `Jay`;
console.log(friends);
// Even though friends is a const we can change certain parts of it but not the entire Array
// friends = [`Bob`, `Alice`]; This gives us an error

// Let's create another array with different datatypes
const surName = `Krüger`;
const kevin = [`Kevin`, surName, 2022 - 1994, `I have ${friends.length} close friends.`];
console.log(kevin);

// Exercise
const calculateAge = function (birthYear) {
    return 2022 - birthYear;
}
const YEARS = [1990, 1968, 1994, 1997];
const ages = [calculateAge(YEARS[0]), calculateAge(YEARS[1]), calculateAge(YEARS[2]), calculateAge(YEARS[3])];
console.log(ages);

// Basic Array Operations (Methods)
// Let's use the "push" method to add new things to the end of an array
const objects = [`Monitor`, `Keyboard`, `Mouse`, `Computer`, `Headset` ];
objects.push(`Glass`);

// Now let's add new things to the beginning of an array
objects.unshift(`Mousepad`);

// Now we remove a thing from the array
objects.pop();
// Removing the first Thing inside the array
objects.shift();

console.log(objects.indexOf(`Keyboard`)); // Should be 1
console.log(objects.indexOf(`Glass`)); // It gives us -1 if we try to get the index of something that isn't in the array
console.log(objects);

// Pretty similar to "indexOf" but more modern with false or true hints instead of -1
console.log(objects.includes(`Monitor`))
console.log(objects.includes(`Glass`))

// This method returns a Boolean so we can use it for statements 
if (objects.includes(`Computer`)) {
    console.log(`You have the Computer`);
}

// Introduction Objects
// Let's use an array again with different kinds of informations
const kevinArray = [
    `Kevin`,
    `Krüger`,
    2022 - 1994,
    [`Steven`, `Marcel`, `Silke`, `Karsten`]
];
// This array contains information of a full name, age and family members
// With Objects on the other hand, we can pass in like a description so we don't have to memorize it ouself.
const kevin  = {
    firstName: `Kevin`,
    lastName: `Krüger`,
    age: 2022 - 1994,
    familyMembers: [`Steven`, `Marcel`, `Silke`, `Karsten`]
}
// This Objects has 4 Properties and the order doesn't matter to retrieve informations from a object.
console.log(kevinArray);
console.log(kevin);

// Using the Dot Notation
console.log(kevin.lastName);
// Using the Bracket Notation
console.log(kevin[`lastName`]);
// Let's store a repeating Part in a Variable (Like firstName and lastName)
const nameKey = `Name`;
console.log(kevin[`first` + nameKey]);
console.log(kevin[`last` + nameKey]);

// Let's make the need of the Bracket Notation even more clear
const interestedIn = prompt(`What do you want to know about Kevin? 
choose between firstName, lastName, age and family.`);
// Let's log the result in the console
console.log(kevin[interestedIn]);

// Let's do something if someone wants to know anything that isn't inside the object
if (kevin[interestedIn]) {
    console.log(kevin[interestedIn]);
} else {
    console.log(`Wrong request!`);
}

// Now let's use the Dot and Bracket Notation to add new Things to our Object
kevin.location = `Germany`;
kevin[`gitHub`] = `KevinKrueger94`;
console.log(kevin);

// Exercise
// Kevin has 4 close family members, and his mothers name is called Silke.
console.log(`${kevin.firstName} has ${kevin.familyMembers.length} close family members, and his Mother is called ${kevin.familyMembers[2]}.`);

const kevin = {
    firstName: `Kevin`, // String Value
    lastName: `Krüger`, // String Value
    birthYear: 1994,    // Integer Value
    mood: `disappointment`,
    family: [`Marcel`, `Steven`, `Silke`, `Karsten`, `Max`], // Array Value 
    hasDriverLicense: false, // Boolean Value

    // Function Expression | Function Value
    calcAge: function() {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.mood}, and he has ${this.hasDriverLicense ? `a` : `no`} driver's license`;
    }
}

console.log(kevin.calcAge()); // Dot Notation
console.log(kevin[`calcAge`]()); // Bracket Notation

// Exercise
// Kevin is a 28 years old disappointment, and he doesn't have a driver license.
console.log(kevin.getSummary());

// Now let's learn about loops
// Loops help us to repeat tasks over and over again
// Simple example is during a workout you lift things over and over again
// Writing a for loop / For loop keeps running while condition is True
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weigths repetition ${rep}`);
}
*/

const kevinsArray = [
    `Kevin`,
    `Krüger`,
    2022 - 1994,
    [`Marcel`, `Silke`, `Karsten`, `Max`],
    `Student`,
    true
];
/*
const types = [];
for (let i = 0; i < kevinsArray.length; i++) {
    // Reading from kevinsArray
    console.log(kevinsArray[i]);

    // Filling types array
    types[i] = typeof kevinsArray[i];
    types.push(typeof kevinsArray[i]);
}
console.log(types);

const years = [1994, 2007, 1968, 1988];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);

console.log(`=== Only Strings ===`);
// Continue Method
for (let i = 0; i < kevinsArray.length; i++) {
if (typeof kevinsArray[i] !== `string`) continue;

    console.log(kevinsArray[i], typeof kevinsArray[i]);
}

console.log(`=== Break with Number ===`);
// Break Method
for (let i = 0; i < kevinsArray.length; i++) {
    if (typeof kevinsArray[i] === `number`) break;
    
        console.log(kevinsArray[i], typeof kevinsArray[i]);
}

// Looping Backwards and Loops in Loops
for (let i = kevinsArray.length - 1; i >= 0; i--) {
    console.log(i, kevinsArray[i]);
}

// Looping in a loop
// Exercise => We are doing 3 different workout exercises and repeat each 5 times
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`=== Starting Exercise ${exercise} ===`)

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise: Lifting weights. Repetition ${rep} 🏋️‍♂️`);
    }
}

// While Loop
// For Loop for comparison
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weigths repitition ${rep} 🏋️‍♂️`);
}
// The While loop will continue to run while the condition is true
let rep = 1;
while (rep <= 10) {
    console.log(`While: Lifting weigths repitition ${rep} 🏋️‍♂️`);
    rep++;
}
// While Loop is more versatile because it doesn't really need a counter. It runs while the condition is set to true

// Let's do a dice roll that continues to roll it until the 6 is rolled
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
if (dice === 6) {
    console.log(`You rolled a ${dice} and won!`)
}

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`You rolled a ${dice} and won!`)
    }
}
*/