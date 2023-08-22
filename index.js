const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const createSVG = require('./lib/createSVG');
const validateColor = require('validate-color').default;
