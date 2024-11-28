/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 9;

const regularTicketFare = 800;

const isStudent = true;

if (age < 10) {
  console.log("Free ticket fare for  age (1-10)");
} else if (isStudent) {
  const discountedPrice = (regularTicketFare * 50) / 100;
  const remainingPrice = regularTicketFare - discountedPrice;
  console.log(`50% Discount for Student give only ${remainingPrice} Tk`);
} else if (age >= 60) {
  const fifteenPercentDiscountPrice = (regularTicketFare * 15) / 100;
  const remainingPrice = regularTicketFare - fifteenPercentDiscountPrice;
  console.log(
    `15% discount for senior citizens give only ${remainingPrice} Tk`
  );
} else {
  console.log(`No discount give regular ticket fare: ${regularTicketFare} Tk`);
}
