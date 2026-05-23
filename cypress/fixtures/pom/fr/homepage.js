import { title } from 'process';

class HomepageFr {
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

  get linkAmznES() {
    return cy.get('[href="https://amzn.eu/dNrY8vj"]');
  }

  get linkAmznFR() {
    return cy.get('[href="https://amzn.eu/6BpwhAi"]').eq(0);
  }

  verifyMainTitleTextFr(text) {
    this.mainTitle.should('have.text', text);
  }

  verifyMainTitleFr(title) {
    this.mainTitle.should('have.text', title);
  }

  clickHambMenuButton() {
    this.buttonHambMenu.click({ force: true });
  }

  verifyEnglishButton() {
    this.buttonEn.should('have.text', 'EN');
  }

  verifyFrenchButton() {
    this.buttonFr.should('have.text', 'FR');
  }

  clickEnglishButton() {
    this.buttonEn.click({ force: true });
  }

  verifyMainTitleEn(text) {
    this.mainTitle.should('have.text', text);
  }

  verifyHeaderLiLength(length) {
    this.headerLi.should('have.length', length);
  }

  verifyFirstHeaderLi(text) {
    this.headerLi.eq(0).should('have.text', text);
  }

  verifySecondHeaderLi(text) {
    this.headerLi.eq(1).should('have.text', text);
  }

  verifyThirdHeaderLi(text) {
    this.headerLi.eq(2).should('have.text', text);
  }

  clickFirstHeaderLi() {
    this.headerLi.eq(0).click({force: true});
  }

  isVisibleActionButton() {
    this.buttonAction.should('be.visible');
  }

  clickSecondHeaderLi() {
    this.headerLi.eq(1).click();
  }

  verifyAmazonCard() {
    this.cardAmazon.should('be.visible');
  }

  clickThirdHeaderLi() {
    this.headerLi.eq(2).click();
  }

  clickEnSavoirPlusButton() {
    this.buttonEnSavoirPlus.click();
  }

  verifyAuthorName() {
    this.authorName.should('be.visible');
  }

  verifyStyleDeVieTitle() {
    this.titleStyleDeVie.should('be.visible');
  }

  verifyAmazonESLink(link) {
    this.linkAmznES.should('have.attr', 'href', link);
  }

  verifyAmazonFRLink(link) {
    this.linkAmznFR.should('have.attr', 'href', link);
  }
}

export default new HomepageFr();
