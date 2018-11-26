const chalk = require('chalk');
const inquirer = require('inquirer');

console.log(chalk.yellow("Hello World!"));

inquirer.prompt([
  {
    type: "input",
    name: 'name',
    message: "What is your name?"
  },
  {
    type: 'input',
    name: 'phone',
    message: 'What is your phone number?',
  }
])
.then(answers => {
  let { phone, name } = answers;
  console.log(chalk["yellow"].bold.underline(name));
  console.log(chalk["bgBlueBright"](phone));
})
.catch(error => console.log(error));