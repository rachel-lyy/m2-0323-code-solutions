/* exported student */
const student = {
  firstName: 'Rachel',
  lastName: 'Ly',
  subject: 'Art History',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    var intro = 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' ' + 'and I am studying ' + this.subject + '.';
    return intro;
  }
};
