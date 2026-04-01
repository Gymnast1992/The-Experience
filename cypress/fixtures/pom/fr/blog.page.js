class blogPageFr {
  get mainBlogTitleText() {
    return cy.get('h1[field="title"]');
  }

  verifyMainTitleBlogText(text) {
    this.mainBlogTitleText.should('have.text', text);
  }

  get imageLartDansLair() {
    return cy.get('.t-bgimg').eq(0);
  }

  clickLartDansLairImage() {
    this.imageLartDansLair.click();
  }

  get imageMagieDuChapiteau() {
    return cy.get('.t-bgimg').eq(1);
  }

  clickMagieDuChapiteauImage() {
    this.imageMagieDuChapiteau.click();
  }

  verifyMainBlogTitleText() {
    this.mainBlogTitleText.should('be.visible');
  }
}

export default new blogPageFr();
