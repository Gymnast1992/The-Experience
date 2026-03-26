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

  clickInTheAirImage() {
    this.imageInTheAir.click();
  }
}

export default new BlogPage();
