import takeAChance from './take-a-chance.js';

const aChance = takeAChance('Rachel');
aChance.then((sucess) => {
  console.log(sucess); // Success!
}).catch((error) => {
  console.error(error.message); // Error!
});
