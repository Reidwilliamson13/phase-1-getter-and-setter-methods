// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return this.radius * Math.PI * 2;
  }
  get area() {
    return Math.PI * (this.radius * this.radius);
  }
  set diameter(newdiameter) {
    this.radius = newdiameter / 2;
  }
  set circumference(newcircumference) {
    this.radius = newcircumference / (2 * Math.PI);
  }
  set area(newarea) {
    this.radius = Math.sqrt(newarea / Math.PI);
  }
}

circle = new Circle(5);
console.log(circle.diameter);
