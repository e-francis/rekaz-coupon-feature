# Rekaz Coupon Feature Assignment

This is a Cypress Mocha framework suite developed in TypeScript using Visual Studio Code(VsCode) and the POM(Page Object Model) test design pattern. The purpose of this automation suite is to automate a successfull coupon creation and application on https://platform.rekaz.dev/.

## Features Automated

- `Login`
- `Coupons`

## Project Structure

The project has the following directory structure:

- `cypress\page-objects`: Contains element selectors and methods that encapsulates the automation of an action performed on a page.
- `page-objects\app.ts`: The app.ts file serves as a central component within our automation framework, orchestrating the interaction with various utility classes and page modules.
- `cypress\e2e`: Contains the spec files used to automate the testing of the functionality.

## Prerequisites

To set up and run the project, you will need the following:

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/) (v17 or higher)

## Setting up VSCODE

To enhance your development experience with VSCODE, it is recommended to install the following extensions:

- Prettier
- ES6 Mocha Snippets
- JavaScript and TypeScript Nightly

In the `tsconfig.json` file provided, the `include` property specifies which files or directories should be included in the TypeScript compilation process. Let's break down what each entry in the include array does:

- [cypress.config.ts]: Serves as the configuration file for setting up and customizing the cypress test runner.

## Installing the project

1. Clone the project from github using 
```
git clone https://github.com/e-francis/rekaz-coupon-feature.git

```
2. Run 
```
npm install
```
In the root directory of your project, create a file named `.env` and add the following variables:  

```ini
EMAIL=your_email
VALID_PASSWORD=your_valid_password
INVALID_PASSWORD=your_invalid_password
```
## Running the Tests for Coupon Feature

1. Open the project in VSCODE and then a terminal.
2. Run the following command:
   ```
   npm run coupon:tests:report
   ```
   This command executes the tests for the coupon fetaure and and also runs the command to display the test results after the test has been successfully run.

Please note that you need to install the necessary dependencies using `npm install` before running the tests for the first time. Also give a give a few seconsa to allow the test results to be displayed.

## GitHub Actions Workflow for Cypress Tests  

This repository uses GitHub Actions to automate Cypress tests and generate an Allure report. The workflow is defined in `.github/workflows/coupon.tests.yml` and includes the following steps:

### Workflow Overview  

- **Trigger Events**: The workflow runs on every push and pull request to the `main` branch.  
- **Test Execution**:  
  1. Checks out the repository code.  
  2. Sets up Node.js (version 22).  
  3. Installs dependencies via `npm install`.  
  4. Loads sensitive credentials (email and password) from GitHub Secrets.  
  5. Runs Cypress tests using `npx cypress run`.  
  6. Generates an Allure report for test results.  
  7. Uploads the Allure report as an artifact.  

### Secrets Management in GitHub Actions  

- The workflow securely uses **GitHub Secrets** to store sensitive data such as the test account's email and password.  
- These secrets are referenced in the workflow file and passed as environment variables to Cypress:  
  ```yaml
  env:
    EMAIL: ${{ secrets.EMAIL }}
    PASSWORD: ${{ secrets.VALID_PASSWORD }}
    INVALID_PASSWORD: ${{ secrets.INVALID_PASSWORD }}


Happy testing!
