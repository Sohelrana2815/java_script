// task1

function count_zero(binary_string) {
  let count = 0;

  for (let char of binary_string) {
    if (char === "0") {
      count++;
    }
  }

  return count;
}

console.log(count_zero("101110"));
