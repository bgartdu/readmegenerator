const inquirer = require('inquirer');
const fs = require('fs-promise-native');

async function main () {

    let data = await inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "what is your github username?",
        },

        {
            type: "input",
            name: "email",
            message: "what is your email address?",
        },

        {
            type: "input",
            name: "url",
            message: "what is your url to the project?",
        },

        {
            type: "input",
            name: "projectName",
            message: "what the project name?",
        },

        {
            type: "input",
            name: "desc",
            message: "what is your project description?",
        },

        {
            type: "list",
            message: "what is your project's license?",
            name: "license",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD3", "NONE"],
        },

        {
            type: "input",
            name: "dependencies",
            message: "what is the command to install dependencies?",
        },

        {
            type: "input",
            name: "tests",
            message: "what the command to run tests?",
        },

        {
            type: "input",
            name: "infoUse",
            message: "What does the user need to know to use this program?",
        },

        {
            type: "input",
            name: "infoContribute",
            message: "What does the user need to know to contribute to this project?",
        },

    ])
let text = `# ${data.projectName}

## Description

${data.desc}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [test](#tests)

* [Questions](#Questions)

## Installation

To install necessary dependencies run the following command:

\`\`\`
${data.dependencies}
\`\`\`

## Usage

${data.infoUse}


## License

## Contributing

${data.infoContribute}

## Tests

to run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions about the repository, open an issue or contact [${data.username}](undefined) directly at ${data.email}.

`;

    await fs.writeFile("README.md", text);

    console.log("wrote file README.md!");


}

main();