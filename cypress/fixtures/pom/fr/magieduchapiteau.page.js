class magieDuChapiteau {
  get mainTitleText() {
    return cy.get('.t-uptitle_sm');
  }

  get picturesLi() {
    return cy.get('ul li');
  }

  get returnHomeBtn() {
    return cy.get('.t-menu-base__logo');
  }

  verifyLengthOfTheLi(length) {
    this.picturesLi.should('have.length', length);
  }

  verifyMainTitleText(text) {
    this.mainTitleText.should('have.text', text);
  }

  clickReturnHomeBtn() {
    this.returnHomeBtn.click();
  }
}

export default new magieDuChapiteau();
