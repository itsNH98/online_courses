let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnerAge = 18;

if (runnerAge >= 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`Hi number ${raceNumber}, you will start at 9:30`);
} else if (runnerAge > 18 &! registeredEarly) {
    console.log(`Hi number ${raceNumber}, you will start at 11:00`);
} else if (runnerAge < 18) {
   console.log(`Hi number ${raceNumber}, you will start at 12:30`); 
} else {
  console.log(`Hi number ${raceNumber}, go see desk`)
}
