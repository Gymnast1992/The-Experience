class BlogPage {
  get mainTitle() {
    return cy.get('h1[field="title"]');
  }
}

export default new BlogPage();
