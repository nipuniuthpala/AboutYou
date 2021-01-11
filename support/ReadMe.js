//Installing Cypress

//Install Cypress via npm:cd /your/project/path

//npm install cypress --save-dev

//Install puppeteer using   npm install puppeteer

//Open Cypress:  ./node_modules/.bin/cypress open. or npx cypress open
//Can run in headless mode: Can run in headless mode in CI server or in your local machine using the project id. You need to put the project id in the cypress.json file.

/*eg:

{
"chromeWebSecurity": false,
"projectId": "kss15z"
}

project Id will be changed per user.

using this command it will execute in headless mode. key also change according to the user. you need to get it from settings tab in the CypressUI.

eg: /node_modules/.bin/cypress run --record --key af206e5a-fad0-41f3-b806-843ac3db4dad 

functions aand data re mentioned in support/About_You_Login.js and tests are in integration/examples folder AboutYou.js file. */