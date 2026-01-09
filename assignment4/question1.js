const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Assume first price is the highest
let highestPrice = amdPrices[0];

// Compare each price
for (let i = 1; i < amdPrices.length; i++) {
  if (amdPrices[i] > highestPrice) {
    highestPrice = amdPrices[i];
  }
}

console.log("AMD 52-week high is " + highestPrice);