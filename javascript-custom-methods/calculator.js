/* exported calculator */
const calculator = {
  add: function (x, y) {
    var result = x + y;
    return result;
  },
  subtract: function (x, y) {
    var result = x - y;
    return result;
  },
  multiply: function (x, y) {
    var result = x * y;
    return result;
  },
  divide: function (x, y) {
    var result = x / y;
    return result;
  },
  square: function (x) {
    var result = x * x;
    return result;
  },
  sumAll: function (numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      sum += numbers[i];

    } return sum;
  },
  getAverage(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    } var avg = sum / numbers.length;
    return avg;
  }
};
