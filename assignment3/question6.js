const disneyData = {
  open: "120.54",
  high: "122.56",
  low: "120.54",
  close: "121.09",
  volume: "90000"
};

// STEP 1: Convert values to numbers
let open = Number(disneyData.open);
let close = Number(disneyData.close);
let volume = Number(disneyData.volume);

// STEP 2: Check pricing trend
if (close > open) {
  if (volume > 100000) {
    console.log("Strong Bullish");
  } else {
    console.log("Bullish");
  }
} else if (close < open) {
  if (volume > 10000) {
    console.log("Strong Bearish");
  } else {
    console.log("Bearish");
  }
} else {
  console.log("Neutral");
}
