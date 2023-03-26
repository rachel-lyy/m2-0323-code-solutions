/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    const area = Math.round(Math.PI * (radius * radius));
    const circumference = Math.round(Math.PI * 2 * radius);
    super(area, circumference);
    this.radius = radius;
  }

  print() {
    const circleValue = super.print() + ' Radius is ' + this.radius;
    return circleValue;
  }
}

const newCircle = new Circle(3);
console.log(newCircle.print());
