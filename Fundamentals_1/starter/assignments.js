// Variables
const country = "Deutschland";
const continent = "Europa";
const isIsland = false;
const language = "Deutsch";
let population = 88000000;
let finlandPopulation = 6000000;
const avgPopulation = 33000000;

let half = population / 2;
let halfPop = half >= 33000000;
population++;
population--;

// console.log(`${country} ist in ${continent} und es leben ${population} Menschen dort die ${language} sprechen.`);

console.log(half);

if (halfPop) {
    console.log(`${country}'s Einwohnerzahl ist über dem Durchschnitt.`)
} else {
    console.log(`${country}'s Einwohnerzahl ist ${half} und somit unter dem Durchschnitt.`);
}


console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 6178
console.log("19" - "13" + 17); // 23
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143