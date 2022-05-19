/* Coding Challenge 1 Debugging */

// UNDERSTAND THE PROBLEM
// - Array transformed to string, seperated by ...
// - What is the X days? Answer: index + 1
// BREAKING TO SUB-PROBLEMS
// - Tranform array to a string DONE
// - Transform each element to string with °C DONE
// - Strinngs needs to contain day (index + 1) DONE
// - Add ... between elements and start and end of DONE

const data1 = [17, 21, 23];
const data2 = [12, 5, 5 - 5, 0, 4];

// console.log(`... ${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ...`);

const printForecast = function (arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log(`... ` + str);
};
printForecast(data1);
