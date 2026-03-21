class Homepage {
  get mainTitle() {
    return cy.get('h1.t-title');
  }

  get buttonHambMenu() {
    return cy.get('a [type="button"]');
  }

  get buttonEn() {
    return cy.get('[class="t199__lang-item"]').eq(0);
  }

  get buttonFr() {
    return cy.get('[class="t199__lang-item"]').eq(1);
  }

  get headerLi() {
    return cy.get('li.t199__menu-item-wrap');
  }

  get buttonAction() {
    return cy.get('.t814__btn').eq(1);
  }

  get cardAmazon() {
    return cy.get('.t-card__col');
  }

  get buttonEnSavoirPlus() {
    return cy.get('a.t-btn').eq(0);
  }

  get authorName() {
    return cy.contains('Maksym Semiankiv');
  }

  get titleStyleDeVie() {
    return cy.contains('#Styledevie');
  }

  get linkAmznUS() {
    return cy.get('[href="https://amazon.com/dp/1779418388"]');
  }

  get linkAmznFR() {
    return cy.get('[href="https://amzn.eu/6BpwhAi"]').eq(0);
  }
}

export default new Homepage();
