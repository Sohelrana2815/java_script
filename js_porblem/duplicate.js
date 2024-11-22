// Even Number avg

function evenAverageFun(arr) {
  const evenNumbersArray = [];

  for (const element of arr) {
    if (element % 2 !== 1) {
      evenNumbersArray.push(element);
    }
  }

  let sum = 0;
  for (const element of evenNumbersArray) {
    sum = sum + element;
  }
  const length = evenNumbersArray.length;
  const evenAverage = sum / length;
  console.log(`sum`,evenAverage);
}

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

evenAverageFun(arrayOfNumbers);
