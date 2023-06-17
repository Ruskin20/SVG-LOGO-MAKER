questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter no more than three characters for your logo.',
        validate: (text) => text.length === 3
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want the logo to be?',
        choices: ['Circle','Square','Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want the shape to be?',
    }
]

module.exports = questions