class inTheAirPage {
  get mainTitle() {
    return cy.get('.t001__title');
  }

  get buttonTakeMeHome() {
    return cy.get('.t-menu-base__logo');
  }

  get textFlyingTrapeze() {
    return cy.contains('#flyingtrapeze');
  }

  verifyTextFlyingTrapeze() {
    this.textFlyingTrapeze.should('be.visible');
  }

  verifyMainTitleText(title) {
    this.mainTitle.should('contain.text', title);
  }

  clickTakeMeHomeButton() {
    this.buttonTakeMeHome.click();
  }
}

export default new inTheAirPage();
