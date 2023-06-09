const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./lib/questions')
const {Circle, Triangle, Square } = require('./lib/shape')

function buildLogo(shapeInfo) {
    const { text, textColor, shape, shapeColor } = shapeInfo
    let shapeRendered;
    switch (shape) {
        case "Circle":
            const circleSelected = new Circle(text, textColor, shape, shapeColor)
            shapeRendered = circleSelected.render()
            break;
        case "Triangle":
            const triangleSelected = new Triangle(text, textColor, shape, shapeColor)
            shapeRendered = triangleSelected.render()
            break;
        case "Square":
            const squareSelected = new Square(text, textColor, shape, shapeColor)
            shapeRendered = squareSelected.render()
            break;
    }
    return shapeRendered
}

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            fs.writeFile('./examples/logo.svg', buildLogo(answers), err => console.log(err))
            console.log('Your new logo.svg has been created')
        })
        .catch((err) => console.log(err))
}

init()