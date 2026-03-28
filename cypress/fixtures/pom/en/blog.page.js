class BlogPage {
  get mainTitle() {
    return cy.get('h1[field="title"]');
  }

  verifyMainTitle(text) {
    this.mainTitle.should('have.text', text);
  }

  get imageInTheAir() {
    return cy.get('.t-bgimg').eq(0);
  }

  clickOnInTheAirImage() {
    this.imageInTheAir.click();
  }

  get imageBigtopMagic() {
    return cy.get('.t-bgimg').eq(1);
  }

  clickOnBiogtopMagicImage() {
    this.imageBigtopMagic.click();
  }

  isVisibleMainTitleEn() {
    this.mainTitle.should('be.visible');
  }
}

export default new BlogPage();
