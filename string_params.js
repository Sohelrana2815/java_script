// Goal string er modde koto gulo character ase ber korbo

// step 1 : function call hosse ki na
// step 2 : String koto character er ber kora
// step 2 : String koto character er ber kora

function evenOrOddString(string) {
  const characters = string.length;
  console.log(string, characters);

  if (characters % 2 === 0) {
    console.log("Even size");
    return true;
  } else {
    console.log("Odd Size");
    return false;
  }
}

// evenOrOddString("Hello World!");
// evenOrOddString("Good morning.");

function doubleOrTriple(number, doDouble) {
  if (doDouble) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

// console.log(doubleOrTriple(10, true));
// console.log(doubleOrTriple(10, false));

function numberOfElements(numbers) {
  const len = numbers.length;
  return len;
}

numberOfElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
