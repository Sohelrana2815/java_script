// characters odd na even

function evenOrOddCharacter(str) {
    const characterLength = str.length;
  
    if (characterLength % 2 === 0) {
      // console.log("even");
    } else {
      // console.log("Odd");
    }
  }
  
  evenOrOddCharacter("Good night!");
  
  // double or triple ber korbo
  
  function doubleOrTriple(number, doDouble) {
    if (doDouble) {
      const result = number * 2;
      return result;
    } else {
      const result = number * 3;
      return result;
    }
  }
  
  console.log(doubleOrTriple(5, true));
  console.log(doubleOrTriple(5, false));
  
  // chaile array pathate pari
  
  function numberOfElement(numbers) {
    const len = numbers.length;
    return len;
  }
  
  numberOfElement([1, 2, 3, 4, 5, 6]);
  
  function getAge(person) {
    const age = person.age;
    return age;
  }
  