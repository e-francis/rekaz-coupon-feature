import App from "../../page-objects/app";

const app = new App();

describe("Login Tests Suite", () => {
  it("User should login with valid credentials", () => {
    const email = Cypress.env("EMAIL");
    const password = Cypress.env("VALID_PASSWORD");

    app.loginPage.loginWithValidCredentials(email, password);
    app.loginPage.verifySuccessfulLogin();
  });

  it("User should not login with invalid credentials", () => {
    const email = Cypress.env("EMAIL");
    const password = Cypress.env("INVALID_PASSWORD");

    app.loginPage.loginWithInvalidCredentials(email, password);
    app.loginPage.verifyUnsuccessfulLogin();
  });
});
