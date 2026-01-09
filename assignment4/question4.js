const msftData = [
  [190.15, 196.21, 191.07, 194.44],
  [193.61, 195.89, 190.12, 193.40]
];

// STEP 1: Start with total closing price = 0
let totalClosingPrice = 0;

// STEP 2: Loop through each day
for (let i = 0; i < msftData.length; i++) {
  // Closing price is at index 3
  totalClosingPrice = totalClosingPrice + msftData[i][3];
}

// STEP 3: Calculate average
let averageClosingPrice = totalClosingPrice / msftData.length;

// STEP 4: Round to 2 decimal places
averageClosingPrice = averageClosingPrice.toFixed(2);

// STEP 5: Print result
console.log("Average closing price of MSFT is " + averageClosingPrice);
