class blogPageFr {
  get mainBlogTitleText() {
    return cy.get('h1[field="title"]');
  }

  get returnHomeBtn() {
    return cy.get('.t-menu-base__logo');
  }

  get imageLartDansLair() {
    return cy.get('.t-bgimg').eq(0);
  }

  get imageMagieDuChapiteau() {
    return cy.get('.t-bgimg').eq(1);
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

  clickReturnHomeBtn() {
    this.returnHomeBtn.click();
  }

  verifyMainTitleBlogText(text) {
    this.mainBlogTitleText.should('have.text', text);
  }
}

export default new blogPageFr();
