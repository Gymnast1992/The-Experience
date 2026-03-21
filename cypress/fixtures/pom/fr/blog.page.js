class BlogPage {
  get mainBlogTitle() {
    return cy.get('h1[field="title"]');
  }
}

export default new BlogPage();
