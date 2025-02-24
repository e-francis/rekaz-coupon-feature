import BasePage from "../base.page";

export default class LoginPage extends BasePage {
  private readonly loginElements = {
    ...this.getBaseElements(),
    emailInputField: () => cy.get("#LoginInput_UserNameOrEmailAddress"),
    passcodeInputField: () => cy.get("#LoginInput_Password"),
    loginButton: () => cy.get('[value="Login"]'),
    alertNotifier: () => cy.get('[role="alert"]'),
    homeDashboard: () => cy.get('[class="menu-title"]'),
  };

  loginWithValidCredentials(email: string, password: string) {
    this.loginElements.emailInputField().should("be.visible").type(email);
    this.loginElements.passcodeInputField().should("be.visible").type(password);
    this.loginElements.loginButton().should("be.enabled").click();
  }

  loginWithInvalidCredentials(email: string, invalidPassword: string) {
    this.loginElements.emailInputField().should("be.visible").type(email);
    this.loginElements
      .passcodeInputField()
      .should("be.visible")
      .type(invalidPassword);
    this.loginElements.loginButton().should("be.enabled").click();
  }

  verifySuccessfulLogin() {
    this.loginElements.homeDashboard().first().should("be.visible");
    cy.contains("Home").should("be.visible");
  }

  verifyUnsuccessfulLogin() {
    this.loginElements.alertNotifier().should("be.visible");
    this.loginElements
      .alertNotifier()
      .should("have.text", " Invalid username or password!");
  }
}
