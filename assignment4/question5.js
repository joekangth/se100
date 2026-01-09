const disneyData = [
  {
    open: "120.54",
    high: "122.56",
    low: "120.54",
    close: "121.09"
  },
  {
    open: "123.15",
    high: "127.76",
    low: "123.02",
    close: "124.92"
  }
];

// STEP 1: Start total closing price at 0
let totalClosingPrice = 0;

// STEP 2: Loop through each day
for (let i = 0; i < disneyData.length; i++) {
  // Convert closing price from string to number
  let closingPrice = Number(disneyData[i].close);
  totalClosingPrice = totalClosingPrice + closingPrice;
}

// STEP 3: Calculate average
let averageClosingPrice = totalClosingPrice / disneyData.length;

// STEP 4: Round to 2 decimal places
averageClosingPrice = averageClosingPrice.toFixed(2);

// STEP 5: Print result
console.log("Average closing price of Disney is " + averageClosingPrice);
