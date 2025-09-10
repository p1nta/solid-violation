// This code violates the Open-Closed Principle
// Adding new shapes requires modifying the existing AreaCalculator class
// class AreaCalculator {
//     public calculateArea(shape: string, width: number, height?: number): number {
//         if (shape === 'rectangle') {
//             return width * (height || 0);
//         } else if (shape === 'circle') {
//             return Math.PI * width * width;
//         } else if (shape === 'square') {
//             return width * width;
//         }
//         throw new Error('Unknown shape');
//     }
// }

abstract class Shape {
    abstract calculateArea(): number;
}
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    constructor(private side: number) {
        super();
    }

    calculateArea(): number {
        return this.side * this.side;
    }
}

class AreaCalculator {
    public calculateArea(shape: Shape): number {
        return shape.calculateArea();
    }
}

// Usage
const calculator = new AreaCalculator();

const rectangle = new Rectangle(5, 3);
const circle = new Circle(5);
const square = new Square(4);

console.log('Rectangle area:', calculator.calculateArea(rectangle));
console.log('Circle area:', calculator.calculateArea(circle));