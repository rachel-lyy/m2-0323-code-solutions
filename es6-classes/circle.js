/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Square {
  constructor(area, width, circumference, radius) {
    super(area, width, circumference);
    this.radius = radius;
  }

  printRadius() {
    const value = this.printSquare() + ' Radius is ' + this.radius;
    return value;
  }
}

const newCircle = new Circle(23, 34, 6, 10);
console.log(newCircle.printRadius());
