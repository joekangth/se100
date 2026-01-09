const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Step 1: Start with total = 0
let total = 0;

// Step 2: Add all prices together
for (let i = 0; i < amdPrices.length; i++) {
  total = total + amdPrices[i];
}

// Step 3: Divide by number of days (7)
let average = total / amdPrices.length;

// Step 4: Round to 2 decimal places
average = average.toFixed(2);

// Step 5: Print result
console.log("The 7-day SMA of AMD is " + average);