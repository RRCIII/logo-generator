const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const createSVG = require('./lib/createSVG');
const { throwError } = require('rxjs');
const validateColor = require('validate-color').default;

const promptInquirer = async () => {
    console.log("Create your SVG logo");

    try{
        const data = await inquirer.prompt([
            {
                name: 'text',
                type: 'input',
                message: 'Enter a text you would like to use for your logo (please enter 1-3 characters)', 
                validate: (letters) => {
                    //varify text input is witin 3 character length
                    if (letters && letters.length <= 3) {
                        return true;
                    } else {
                        console.log('\n Please enter valid text length (between 1-3 characters)')
                        return false;
                    }
                }
            },
            {
                name: 'textColor',
                type: 'input',
                message: 'What color would you like the text to be?',
                validate: (textColor) => {
                    const colorCheck = validateColor(textColor)
                
                    if(textColor && colorCheck) { 
                        return true;
                    } else {
                        console.log('\nPlease enter a valid HTML color, hex, rgb, hsl, hwb, etc.')
                        return false;
                    }
                }
            },
            {
                name: 'shape',
                type: 'list',
                message: 'What shape do you want your logo to be? Choose from the following:',
                choices: ['Triangle', 'Circle', 'Square']
            },
            {
                name: 'shapeColor',
                type: 'input',
                message: 'What color would you like the shape to be?',
                validate: (shapeColor) => {
                    //checks color validation for shape color using validate-color 
                    const colorCheck = validateColor(shapeColor)

                    if(shapeColor && colorCheck) {
                        return true;
                    } else {
                        console.log('\nPlease enter a valid HTML color, hex, rgb, hsl, hwb, etc')
                    }
                }

            }
        ])
        const result = createSVG(data);
        
        //fs.promises.writeFile() to the ./dist folder
        await writeFile('./dist/logo.svg', result);
            console.log('SVG logo generated!')
    } catch (error) {
        console.log(error);
    }
} 