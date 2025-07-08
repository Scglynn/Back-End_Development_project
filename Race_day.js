let raceNumber = Math.floor(Math.random() * 1000);

let isRunnerRegistered = true;

let runnerAge = 18;

if(isRunnerRegistered && runnerAge > 18) {
  raceNumber += 1000;
}

if(isRunnerRegistered && runnerAge > 18) {
  console.log("Early adults run at 9:30 am.");
} else if(!isRunnerRegistered && runnerAge > 18) {
  console.log("Late adults run at 11:00 am.");
} else if(!isRunnerRegistered || runnerAge < 18) {
  console.log("Youth registrants run at 12:30 pm (regardless of registration).");
} else {
  console.log("Head to the registration desk for support.")
}