class lartDansLair {
  get textTitle() {
    return cy.contains('#trapèzevolant');
  }

  get mainTitleText() {
    return cy.get('.t001__title');
  }

  get returnHomeBtn() {
    return cy.get('.t-menu-base__logo');
  }

  clickReturnHomeBtn() {
    this.returnHomeBtn.click();
  }

  isVisibleTitle() {
    this.textTitle.should('be.visible');
  }

  verifyMainTitleText(title) {
    this.mainTitleText.should('contain.text', title);
  }
}

export default new lartDansLair();
