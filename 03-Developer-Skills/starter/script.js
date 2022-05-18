// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Let's solve a problem
// PROBLEM 1: FIXME
// We work for a company building a smart home thermomter. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude.
// keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude?
//   Answer: difference between highest and lowest temp
// - How to compute the max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors? DONE
// - Find max value in temp array DONE
// - Find min value in temp array DONE
// - Subtract min from max (amplitude) and return it DONE

const calcTempAmplitude = function (temps) {
  // The max will be the first element of the array = 3
  // Our Loops starts at 3 and we ask if 3 is greater than the next element.
  // The Loop stops at our highest value inside the array and returns it
  let max = temps[0];
  //   Now let's do the same for the min value
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2: FIXME
// Function should now receive 2 arrays of temps
// - With 2 arrays, should we merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?
// - Answer: Array concat method

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(temperatures, [9, 0, 5, 44]);
console.log(amplitudeNew);
