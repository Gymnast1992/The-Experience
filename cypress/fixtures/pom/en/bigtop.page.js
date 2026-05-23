class bigtopMagic {
  get mainTitleText() {
    return cy.get('.t-uptitle_sm');
  }

  get picturesLi() {
    return cy.get('ul li');
  }

  get takeMeHomeBtn() {
    return cy.get('.t-menu-base__logo');
  }

  verifyTheLengthOfTheLi(length) {
    this.picturesLi.should('have.length', length);
  }

  verifyMainTitleText(text) {
    this.mainTitleText.should('have.text', text);
  }

  clickTakeMeHomeBtn() {
    this.takeMeHomeBtn.click();
  }
}

export default new bigtopMagic();
