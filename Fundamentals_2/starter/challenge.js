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

/* Challenge 2 */
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);