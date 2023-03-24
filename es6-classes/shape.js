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

class Square extends Shape {
  constructor(area, circumference, width) {
    super(area, circumference);
    this.width = width;
  }

  printSquare() {
    const value = this.print() + ' Width is: ' + this.width;
    return value;
  }
}

const newSquare = new Square(23, 34, 6);
console.log(newSquare.printSquare());
