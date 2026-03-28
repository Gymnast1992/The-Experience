class bigtopMagic {
  get mainTitleText() {
    return cy.get('.t-uptitle_sm');
  }

  verifyMainTitleText(text) {
    this.mainTitleText.should('have.text', text);
  }
}

export default new bigtopMagic();
