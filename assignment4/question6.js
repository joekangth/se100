const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// STEP 1: Make a copy of the array
let sortedPrices = amdPrices.slice();

// STEP 2: Sort prices from lowest to highest
for (let i = 0; i < sortedPrices.length; i++) {
  for (let j = i + 1; j < sortedPrices.length; j++) {
    if (sortedPrices[j] < sortedPrices[i]) {
      let temp = sortedPrices[i];
      sortedPrices[i] = sortedPrices[j];
      sortedPrices[j] = temp;
    }
  }
}

// STEP 3: Take the first three prices
let lowest1 = sortedPrices[0];
let lowest2 = sortedPrices[1];
let lowest3 = sortedPrices[2];

// STEP 4: Print result
console.log(
  "The three lowest prices are " +
  lowest1 + ", " +
  lowest2 + ", and " +
  lowest3
);
