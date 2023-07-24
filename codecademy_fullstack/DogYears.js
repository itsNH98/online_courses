const myAge = 23;
// Var that will change 
let earlyYears = 2;

earlyYears *= 10.5;
// console.log(earlyYears)
// Account for the first two years for calculation
let laterYears = myAge - 2;

// multiply later years by dog years
laterYears *= 4;
console.log(laterYears);

const myAgeInDogYears = earlyYears + laterYears;
// Stores name in lowercase
const myName = "Nicolas".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`)
