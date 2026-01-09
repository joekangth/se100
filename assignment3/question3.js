const disneyData = {
  open: "120.54",
  high: "122.56",
  low: "120.54",
  close: "121.09"
};

// STEP 1: Convert values to numbers
let open = Number(disneyData.open);
let high = Number(disneyData.high);
let low = Number(disneyData.low);
let close = Number(disneyData.close);

// STEP 2: Apply the formula
let result = open - high + low - close;

// STEP 3: Round to 2 decimal places
result = result.toFixed(2);

// STEP 4: Print the result
console.log(result);
