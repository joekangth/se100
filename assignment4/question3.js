const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// STEP 1: Calculate the 7-day average
let total = 0;

for (let i = 0; i < amdPrices.length; i++) {
  total = total + amdPrices[i];
}

let average = total / amdPrices.length;
average = average.toFixed(2);

// STEP 2: Count days above the average
let count = 0;

for (let i = 0; i < amdPrices.length; i++) {
  if (amdPrices[i] > average) {
    count = count + 1;
  }
}

// STEP 3: Print result
console.log("Number of days AMD was above the 7-day SMA is: " + count);
