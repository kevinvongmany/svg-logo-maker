class Shape {

    render() {
        throw new Error('You have to implement the method render in your child class!');
    }
}

class Circle extends Shape {

    render() {
        return "Circle";
    }
}

class Square extends Shape {

    render() {
        return "Square";
    }
}

class Triangle extends Shape {

    render() {
        return "Triangle";
    }
}