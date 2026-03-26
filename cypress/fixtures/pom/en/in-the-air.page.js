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
}

export default inTheAirPage();
