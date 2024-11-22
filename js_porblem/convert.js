// 12 inch 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

const value = inchToFeet(60);

// console.log(value);

function inchToFeet2(inch) {
  const fractionFeet = inch / 12;
  const feetNumber = parseInt(fractionFeet);
  const inchRemaining = inch % 12;
  const result = feetNumber + " feet " + inchRemaining + " inch";
  return result;
}

const SohelHeight = inchToFeet2(68);
console.log(SohelHeight);

// mile to km

// 1 km = 0.62137119 miles

function kmToMiles(km) {
  const miles = km * 0.62137119;
  return miles;
}

const convertKmToMiles = kmToMiles(5);

console.log(convertKmToMiles);
