class bigtopMagic {
  get mainTitleText() {
    return cy.get('.t-uptitle_sm');
  }

  verifyMainTitleText(text) {
    this.mainTitleText.should('have.text', text);
  }

  get picturesLi() {
    return cy.get('ul li');
  }

  verifyTheLengthOfTheLi(length) {
    this.picturesLi.should('have.length', length)
  }
}

export default new bigtopMagic();
