// find the longest word

function findLongestWord(words) {
  const longestWord = words.reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");

  return longestWord;
}

const words = ["apple", "banana", "cherry", "dragonFruit"];

const longestWord = findLongestWord(words);

console.log(longestWord);
