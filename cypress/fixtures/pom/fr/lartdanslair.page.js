class lartDansLair {
  get textTitle() {
    return cy.contains('#trapèzevolant');
  }

  isVisibleTitle() {
    this.textTitle.should('be.visible');
  }

  get mainTitleText() {
    return cy.get('.t001__title');
  }

  verifyMainTitleText(title) {
    this.mainTitleText.should('contain.text', title);
  }

  get buttonReturnHomeFr() {
    return cy.get('.t-menu-base__logo');
  }

  clickReturnHomeButtonFr() {
    this.buttonReturnHomeFr.click();
  }
}

export default new lartDansLair();
