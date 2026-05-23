class BlogPage {
  get mainTitle() {
    return cy.get('h1[field="title"]');
  }

  get imageInTheAir() {
    return cy.get('.t-bgimg').eq(0);
  }

  get imageBigtopMagic() {
    return cy.get('.t-bgimg').eq(1);
  }

  get takeMeHomeBtn() {
    return cy.get('.t-menu-base__logo');
  }

  clickOnInTheAirImage() {
    this.imageInTheAir.click();
  }

  verifyMainTitle(text) {
    this.mainTitle.should('have.text', text);
  }

  clickOnBiogtopMagicImage() {
    this.imageBigtopMagic.click();
  }

  isVisibleMainTitleEn() {
    this.mainTitle.should('be.visible');
  }

  clickTakeMeHomeBtn() {
    this.takeMeHomeBtn.click();
  }
}

export default new BlogPage();
