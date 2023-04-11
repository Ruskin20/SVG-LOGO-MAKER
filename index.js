const inquirer = require('inquirer');
const fs = require('fs');








// Array of questions
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to (3) Characters:",
        validate: function (input) {
            if (input.lenght <= 3) {
                return true;
            }
            else {
                return "Must be 3 characters or less"
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color for text",
        default: "Red"
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for shape",
        default: "Blue"
    },
    {
        type: "list",
        name: "shape",
        message: "What shape do you want the logo to be?",
        choices: ['Circle', 'Square', 'Triangle'],
        default: "Square"
    }
];

function init() {





}