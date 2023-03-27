/* exported Shape */
class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    const value = 'Area is ' + this.area + ' Circumference is ' + this.circumference;
    return value;
  }
}

const newShape = new Shape(23, 34);
console.log(newShape.print());
