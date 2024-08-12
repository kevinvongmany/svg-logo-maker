class Shape {
    constructor() {
        this.colour = '';
    }

    setColour(colour) {
        this.colour = colour;
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.colour}" />`
    }
}

class Square extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<rect x="75" y="50" width="150" height="150" fill="${this.colour}" />`
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`
    }
}

module.exports = { Circle, Square, Triangle };