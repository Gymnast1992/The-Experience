class Homepage {
  get title() {
    return cy.get("h1.t-title");
  }
  get btnHumbMenu() {
    return cy.get("button.t-menuburger");
  }
  get langSection() {
    return cy.get(".t199__lang");
  }
  get liSection() {
    return cy.get('.t199__menu-item-wrap');
  }
  get firstLi() {
    return cy.get('.t199__menu-item-wrap').eq(0);
  }
  get secondLi() {
    return cy.get('.t199__menu-item-wrap').eq(1);
  }
  get thirdLi() {
    return cy.get('.t199__menu-item-wrap').eq(2);
  }

  isVisibleTitle() {
    this.title.should("be.visible");
  }

  titleShouldHaveText(text) {
    this.title.should("have.text", text);
  }

  clickHumbMenu() {
    this.btnHumbMenu.click({ force: true });
  }

  isVisibleLangSection() {
    this.langSection.should("be.visible");
  }

  langShouldHaveText(text) {
    this.langSection.should("have.text", text);
  }

  liShouldHaveLength(length) {
    this.liSection.should("have.length", length);
  }

  firstLiShouldHaveText(text) {
    this.firstLi.should("have.text", text);
  }

  secondLiShouldHaveText(text) {
    this.secondLi.should("have.text", text);
  }

  thirdLiShouldHaveText(text) {
    this.thirdLi.should("have.text", text);
  }

}

export default new Homepage();
