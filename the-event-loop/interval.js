var counter = 4;
var blastOff = setInterval(() => {
  counter--;
  console.log(counter);
  if (counter === 0) {
    console.log('Blast Off!');
    clearInterval(blastOff);
  }
}, 1000);
