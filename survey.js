const readline = require('readline');
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  'What do you listen to while doing that?',
  'Which meal is your favourite (eg: dinner, brunch, etc.)',
  "What's your favourite thing to eat for that meal?",
  'Which sport is your absolute favourite?',
  'What is your superpower? In a few words, tell us what you are amazing at!',
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(questions[0], (name) => {
  rl.question(questions[1], (activity) => {
    rl.question(questions[2], (listen) => {
      rl.question(questions[3], (meal) => {
        rl.question(questions[4], (whichMeal) => {
          rl.question(questions[5], (sport) => {
            rl.question(questions[6], (power) => {
              console.log(`
                Thank you for taking some time to do a survey ${name}, You like to listen ${listen} while doing ${activity}.
                You like to eat ${whichMeal} for your ${meal}. and Your favorite sport is ${sport}.
                You are amazing at ${power}
              `);
              rl.close();
            });
          });
        });
      });
    });
  });
});
