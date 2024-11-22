function isEven (number){
    if(number % 2 ===0){
        return true;
    }
    else {
        return false;
    }
}


console.log(isEven(77));
console.log(isEven(88));


// check odd

function isOdd (number){
    if(number % 2 === 1){
        return true;
    }

    else {
        return false;
    }
}


console.log('Is Odd: ',isOdd(99));
console.log('Is Odd: ',isOdd(100));

