/**
 * 4 dara vag gele sheta leap year or divisible by 4
 */

/**
 * logic for find leap year: 1 . those year that is not divisible by 100, if the year is divisible by 4, then it will be a leap year
 * 2. if the year is divisible by 400 , then it is a leap year
 * else it is not a leap year
 *
 */

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return "Leap year";
  } else if (year % 400 === 0) {
    return "Leap year";
  } else {
    return "Not leap year";
  }
}

const leapYear1 = isLeapYear2(2052);
const leapYear2 = isLeapYear2(1900);
const leapYear3 = isLeapYear2(5000);
const leapYear4 = isLeapYear2(2000);
console.log("1", leapYear1, "2", leapYear2, "3", leapYear3, "4", leapYear4);
