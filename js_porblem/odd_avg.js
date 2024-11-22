// bejor shonkhar average

function odd_avg(arr) {
  const odds = [];

  for (const element of arr) {
    if (element % 2 !== 0) {
      //   console.log(element);
      odds.push(element);
    }
  }

  let sum = 0;

  for (const num of odds) {
    // console.log(num);
    sum = sum + num;
  }
  const count = odds.length;
  console.log(sum, count);
  const odd_avg = sum / count;
  console.log(odd_avg);
  

  //   console.log(odds);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,97];

odd_avg(array);
