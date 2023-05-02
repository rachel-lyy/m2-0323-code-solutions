import add from './add.js';
import minus from './subtract.js';
import times from './multiply.js';
import over from './divide.js';

const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[4]);
const operator = process.argv[3];
var result = '';

if (operator === 'plus') {
  result = add(arg1, arg2);
} else if (operator === 'minus') {
  result = minus(arg1, arg2);
} else if (operator === 'times') {
  result = times(arg1, arg2);
} else if (operator === 'over') {
  result = over(arg1, arg2);
} else {
  result = 'Invalid operation';
}
console.log(`result: ${result}`);
