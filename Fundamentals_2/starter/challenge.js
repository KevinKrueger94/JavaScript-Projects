`use strict`

/* Challenge 1 

const calcAverage = (a, b, c) => (a + b + c) / 3;

const avgKoalas = calcAverage(65, 54, 49);
const avgDolphins = calcAverage(23, 34, 27);
console.log(avgKoalas);
console.log(avgDolphins);

if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas (${avgKoalas} Points) wins against Dolphins (${avgDolphins} Points)`);
} else if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins (${avgDolphins} Points) wins against Koalas (${avgKoalas} Points)`);
} else {
    console.log(`No one wins!`);
}
*/

/* Challenge 2 
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);
*/

/* Challenge 3 
const mark = {
    fullName: `Mark Miller`,
    weight: 78,
    height: 1.69,
    calcBMI: function() {
        return this.weight / this.height ** 2;
    }
}

const john =  {
    fullName: `John Smith`,
    weight: 92,
    height: 1.92,
    calcBMI: function() {
        return this.weight / this.height ** 2;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log (`${mark.fullName}'s BMI(${mark.calcBMI()} is higher than ${john.fullName}'s BMI(${john.calcBMI()})!`);
} else {
    console.log (`${john.fullName}'s BMI(${john.calcBMI()} is higher than ${mark.fullName}'s BMI(${mark.calcBMI()})!`);
}

Challenge 4
Let's improve the Tip Calculator 

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.20;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// Bonus
const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));
*/