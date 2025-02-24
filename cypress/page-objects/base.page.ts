export default class BasePage {
  private readonly elements = {
    languageMenu: () => cy.get('[data-kt-menu-trigger="click"]'),
    selectEnglish: () => cy.get('[data-kt-lang="English"]'),
    languageName: () => cy.get('[data-kt-element="current-lang-name"]'),
  };

  protected getBaseElements() {
    return this.elements;
  }

  switchToEnglishLanguage() {
    this.elements.languageMenu().should("be.visible").click();
    this.elements.selectEnglish().should("be.visible").click();
    this.elements.languageName().should("have.text", "English");
  }
}
