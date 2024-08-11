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
        return `<rect x="50" y="50" width="100" height="100" fill="${this.colour}" />`
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<polygon points="150,50 100,100 200,100" fill="${this.colour}" />`
    }
}

module.exports = { Circle, Square, Triangle };