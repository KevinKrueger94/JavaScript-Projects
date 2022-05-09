

const inputYear = '1991';
console.log(inputYear);
console.log(Number(inputYear));

console.log(Number('kevin'));

// Falsy Values  : 0, ''; undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Kevin"));
console.log(Boolean({}));

// Now we use "Switch" Statements for the first time
const day = `Weekend`;

switch (day) {
    case `Monday`: // day === `Monday`
        console.log(`Monday`);
        console.log(`Go to coding meetup`);
        break;
    case `Tuesday`:
        console.log(`Tuesday`);
        console.log(`Start your Workout at 1 Pm`);
        break;
    case `Wednesday`: 
        console.log(`Just study, focus on studying`);
        break;
    case `Thursday`:
        console.log(`Focus on yourself`);
        break;
    case `Friday`:
        console.log('Keep studying');
        break;
    case `Weekend`:
        console.log(`Do whatever you want!`);
        break;
    default: 
        console.log(`Not a valid day!`);
}


const age = 14;
// age >= 18 ?  console.log(`I'd like to drink a glass of wine`) : 
// console.log(`I'd like to drink a glass of water`);

//  Creating an expression and storing it into a variable
const drink = age >= 18 ? `I want a Glass of Wine` : `I want a glass of Milk`; 
console.log(drink);

// Now the if-then-else variation
let drink2;
if (age >= 18) {
    drink2 = `wine`;
} else {
    drink2 = `water`;
}
console.log(drink2);

console.log(`${age >= 18 ? `I want a Glass of Wine` : `I want a glass of Milk`}, please.`)
