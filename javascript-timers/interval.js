var counter = 4;
var changeText = setInterval(() => {
  var getText = document.querySelector('.countdown-display');
  counter--;
  getText.innerHTML = counter;
  if (counter === 0) {
    getText.innerHTML = ('~Earth Beeeeloooww Us~');
    clearInterval(changeText);
  }
}, 1000);
