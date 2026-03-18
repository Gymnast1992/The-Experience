class Homepage {
  get mainTitle() {
    return cy.get('h1.t-title');
  }

  get hambMenuButton() {
    return cy.get('a [type="button"]');
  }
}

export default new Homepage();
