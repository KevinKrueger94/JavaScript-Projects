
/* Challenege One

let marksMass = 78;
let marksHeight = 1.69;

let johnsMass = 92;
let johnsHeight = 1.95;

const BMIMarks = marksMass / marksHeight ** 2;
const BMIJohn = johnsMass / johnsHeight ** 2;

const markHigherBMI = BMIMarks > BMIJohn;

console.log(BMIMarks, BMIJohn);
console.log(markHigherBMI);

*/

/* Challenge Two 

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

console.log(bmiMark, bmiJohn);

if ( bmiMark > bmiJohn) {
    console.log(`Mark's BMI(${bmiMark}) is higher than John's BMI(${bmiJohn})!`);
} else {
    console.log(`John's BMI is higher than Mark's BMI!`)
}
*/

/* Challenge 3 

// 1st Round goes to Dolphins
// let dolphins    = (96 + 108 + 89) / 3;
// let koalas      = (88 + 91 + 110) / 3;

// 2nd Round goes to Koalas
// let dolphins    = (97 + 112 + 101) / 3;
// let koalas      = (109 + 95 + 123) / 3;

// 3rd Round goes to Dolphins
let dolphins    = (97 + 112 + 101) / 3;
let koalas      = (109 + 95 + 106) / 3;

// let dolphins       = 7 + 5 + 1 / 3;
// let koalas       = 7 + 5 + 1 / 3;
let bothTeams = dolphins + koalas;

let minimum = 100;

if (koalas >= minimum && koalas > dolphins) {
    console.log(`Koalas are above 100 Avg. Points (${koalas}) and has more points than Dolphins ${dolphins} !`);
} else if (dolphins >= minimum && dolphins > koalas) {
    console.log(`Dolphins are above 100 Avg. Points (${dolphins}) and has more points than Koalas ${koalas}!`);
} else if (koalas === dolphins && bothTeams >= minimum) {
    console.log(`It's a draw! Dolphins have an avg. of ${dolphins} & Koalas ${koalas}`)
}
else {
    console.log(`Neither of them achieved the minimum!`)
} 
*/

/* Challenge 4 
let bill = 430; 
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}€ and the tip was ${tip}€, and the total cost was ${bill + tip}€!`)
// Test Values 275€ = 41.25€ Tip | 40€ Bill = 6€ Tip | 430€ Bill = 86€ Tip
*/

