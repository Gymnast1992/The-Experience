class blogPageFr {
  get mainBlogTitleText() {
    return cy.get('h1[field="title"]');
  }

  get imageLartDansLair() {
    return cy.get('.t-bgimg').eq(0);
  }

  get imageMagieDuChapiteau() {
    return cy.get('.t-bgimg').eq(1);
  }

  get returnHomeBtn() {
    return cy.get('.t-menu-base__logo');
  }

  clickLartDansLairImage() {
    this.imageLartDansLair.click();
  }

  clickMagieDuChapiteauImage() {
    this.imageMagieDuChapiteau.click();
  }

  verifyMainBlogTitleText() {
    this.mainBlogTitleText.should('be.visible');
  }

  verifyMainTitleBlogText(text) {
    this.mainBlogTitleText.should('have.text', text);
  }

  clickReturnHomeBtn() {
    this.returnHomeBtn.click();
  }
}

export default new blogPageFr();
