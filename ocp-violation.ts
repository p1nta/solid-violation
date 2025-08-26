// This code violates the Open-Closed Principle
// Adding new shapes requires modifying the existing AreaCalculator class
class AreaCalculator {
    public calculateArea(shape: string, width: number, height?: number): number {
        if (shape === 'rectangle') {
            return width * (height || 0);
        } else if (shape === 'circle') {
            return Math.PI * width * width;
        } else if (shape === 'square') {
            return width * width;
        }
        throw new Error('Unknown shape');
    }
}

// Usage
const calculator = new AreaCalculator();
console.log(calculator.calculateArea('rectangle', 5, 3));
console.log(calculator.calculateArea('circle', 5));