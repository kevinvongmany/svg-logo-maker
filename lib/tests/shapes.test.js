const { Circle, Square, Triangle } = require('../shapes');

describe('Circle', () => {
    test('should render a circle with the correct colour', () => {
        const circle = new Circle();
        circle.setColour('blue');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});

describe('Square', () => {
    test('should render a square with the correct colour', () => {
        const square = new Square();
        square.setColour('green');
        expect(square.render()).toBe('<rect x="75" y="50" width="150" height="150" fill="green" />');
    });
});

describe('Triangle', () => {
    test('should render a triangle with the correct colour', () => {
        const triangle = new Triangle();
        triangle.setColour('yellow');
        expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="yellow" />');
    });
});