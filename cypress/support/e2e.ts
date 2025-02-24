// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import App from "../page-objects/app";

const app = new App();

beforeEach(() => {
  cy.visit("/Account/Login");
  app.loginPage.switchToEnglishLanguage();
});


Cypress.on("uncaught:exception", (err, runnable) => {
  if (
    err.message.includes("Cannot read properties of null (reading 'remove')") ||
    err.message.includes("origin")
  ) {
    return false;
  }
  return true;
});
