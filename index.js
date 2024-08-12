const { Circle, Triangle, Square } = require('./lib/shapes');
const generator = require('./lib/generator');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like to render?',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'colour',
        message: 'Enter the colour of the shape: (e.g. blue, red, #ff0000) '
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters to have inside the shape:',
        validate: function (value) {
            if (value.length > 3) {
                return 'Please enter up to 3 characters';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColour',
        message: 'Enter the colour of the text: (e.g. blue, red, #ff0000) '
    }
];


const generateText = (text, xPos, yPos, fontsize, colour) => {
    return `<text x="${xPos}" y="${yPos}" font-size="${fontsize}" fill="${colour}" text-anchor="middle">${text}</text>`;
}

inquirer.prompt(questions).then(answers => {
    let shape, text;
    switch (answers.shape) {
        case 'Circle':
            shape = new Circle();
            text = generateText(answers.text, 150, 120, 50, answers.textColour);
            break;
        case 'Square':
            shape = new Square();
            text = generateText(answers.text, 150, 145, 50, answers.textColour);
            break;
        case 'Triangle':
            shape = new Triangle();
            text = generateText(answers.text, 150, 150, 40, answers.textColour);
            break;
    }
    shape.setColour(answers.colour);
    const svg = new generator(shape.render(), text);
    svg.saveToFile('logo');
    console.log('Generated logo.svg');
});