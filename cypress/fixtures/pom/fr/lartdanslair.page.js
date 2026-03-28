class lartDansLair {
  get textTitle() {
    return cy.contains('#trapèzevolant');
  }

  isVisibleTitle() {
    this.textTitle.should('be.visible');
  }
}

export default new lartDansLair();
