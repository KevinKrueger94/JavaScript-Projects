// // Activate Strict Mode
// `use strict`;

// function logger () {
//     console.log(`My name is Kevin`);
// }

// // Calling / running / invoking function
// logger();

// // Things inside the paramters are variables that get's defined when we invoke the function.
// // function fruitProcessor (apples, oranges) {
// //     const juice = `Juice with ${apples} apples & ${oranges} oranges.`;
// //     return juice;
// // }

// // // Apples becomes 5 and Oranges 0
// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice)

// // const multiJuice = fruitProcessor(4, 4);
// // console.log(multiJuice);


// // Function declaration
// function calcAge1 (birthYear) {
//     return 2022 - birthYear;
// }

// const age1 = calcAge1(1994);

// // Functions without a name is called an anonymous function
// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// }

// const age2 = calcAge2(1968);
// console.log(age1, age2)

// // We can call function declaration before we define the function, we can't do that with function expressions.

// // Arrow Function
// // Easier and faster to write and read
// const calcAge3 = birthYear => 2022 - birthYear;

// console.log(calcAge3(1988));

// // Arrow Functions can also get more complex if we have more parameters
// const yearsUntilRetirement = birthYear => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1994));

// const yearsUntilRetirement1 = (birthYear1, firstName) => {
//     const age1 = 2022 - birthYear1;
//     const retirement1 = 65 - age1;
//     return `${firstName} retires in ${retirement1} years!`;
// }

// console.log(yearsUntilRetirement1(1994, `Kevin`));
// console.log(yearsUntilRetirement1(1996, `Steven`));

// // Calling Functions from other functions

// // Let's create a function that cuts a fruit into mutliple pieces
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// // Array Lection
// // That's how I learned it so far but seems like a waste of code to create so many variables for almost the same things
// const friend1 = `Michael`;
// const friend2 = `Steven`;
// const friend3 = `Peter`;
// console.log(friend1, friend2, friend3);

// // Now let's use an array to fulfill our needs
// const friends = [`Michael`, `Steven`, `Peter`];
// console.log(friends);
// console.log(friends[2]); // Peter is the output

// // Another way to write an array
// const years = new Array(1991, 1984, 1994, 2022);

// // Now let's chance a friend cus we've lost one but found another one
// friends[2] = `Jay`;
// console.log(friends);
// // Even though friends is a const we can change certain parts of it but not the entire Array
// // friends = [`Bob`, `Alice`]; This gives us an error

// // Let's create another array with different datatypes
// const surName = `Krüger`;
// const kevin = [`Kevin`, surName, 2022 - 1994, `I have ${friends.length} close friends.`];
// console.log(kevin);

// // Exercise
// const calculateAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// const YEARS = [1990, 1968, 1994, 1997];
// const ages = [calculateAge(YEARS[0]), calculateAge(YEARS[1]), calculateAge(YEARS[2]), calculateAge(YEARS[3])];
// console.log(ages);

// // Basic Array Operations (Methods)
// // Let's use the "push" method to add new things to the end of an array
// const objects = [`Monitor`, `Keyboard`, `Mouse`, `Computer`, `Headset` ];
// objects.push(`Glass`);

// // Now let's add new things to the beginning of an array
// objects.unshift(`Mousepad`);

// // Now we remove a thing from the array
// objects.pop();
// // Removing the first Thing inside the array
// objects.shift();

// console.log(objects.indexOf(`Keyboard`)); // Should be 1
// console.log(objects.indexOf(`Glass`)); // It gives us -1 if we try to get the index of something that isn't in the array
// console.log(objects);

// // Pretty similar to "indexOf" but more modern with false or true hints instead of -1
// console.log(objects.includes(`Monitor`))
// console.log(objects.includes(`Glass`))

// // This method returns a Boolean so we can use it for statements 
// if (objects.includes(`Computer`)) {
//     console.log(`You have the Computer`);
// }
