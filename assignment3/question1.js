const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// STEP 1: Start total at 0
let total = 0;

// STEP 2: Add all prices together
for (let i = 0; i < msftData.length; i++) {
  total = total + msftData[i];
}

// STEP 3: Divide by number of days
let average = total / msftData.length;

// STEP 4: Print result
console.log(average);
