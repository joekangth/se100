const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// STEP 1: Extract values from array
let open = bacData[2];
let close = bacData[3];
let volume = bacData[4];

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
