
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

/* Challenge Two */

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

