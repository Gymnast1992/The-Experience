import { link } from 'graceful-fs';

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

  get listingsHambMenu() {
    return cy.get('li.t199__menu-item-wrap');
  }

  get liAboutTheBook() {
    return cy.get('li.t199__menu-item-wrap').eq(0);
  }

  get liPurchase() {
    return cy.get('li.t199__menu-item-wrap').eq(1);
  }

  get liBlog() {
    return cy.get('li.t199__menu-item-wrap').eq(2);
  }

  get buttonBuyTheBook() {
    return cy.get('.t814__btn').eq(1);
  }

  get buttonAmazon() {
    return cy.get('.t-card__col');
  }

  get buttonReadMyBlog() {
    return cy.get('a.t-btn').eq(0);
  }

  get sectionLifeStyle() {
    return cy.contains('#lifestyle');
  }

  get linkAmazonFr() {
    return cy.get('[href="https://amzn.eu/6BpwhAi"]').eq(1);
  }

  get linkAmazonDe() {
    return cy.get('[href="https://amzn.eu/d/09Xg7SG3"]').eq(0);
  }

  verifyMainTitle(text) {
    this.mainTitle.should('have.text', text);
  }

  clickHambMenu() {
    this.buttonHambMenu.click({ force: true });
  }

  verifyLangButtonEN() {
    this.buttonEn.should('have.text', 'EN');
  }

  verifyLangButtonFR() {
    this.buttonFr.should('have.text', 'FR');
  }

  verifyLengthHambMenuLi(num) {
    this.listingsHambMenu.should('have.length', num);
  }

  verifyAboutTheBookLi() {
    this.liAboutTheBook.should('have.text', ' About the book ');
  }

  verifyPurchaseLi() {
    this.liPurchase.should('have.text', ' Purchase ');
  }

  verifyBlogLi() {
    this.liBlog.should('have.text', ' Blog ');
  }

  clickOnAboutTheBookLi() {
    this.liAboutTheBook.click();
  }

  verifyBuyTheBookButton() {
    this.buttonBuyTheBook.should('be.visible');
  }

  clickOnButtonFr() {
    this.buttonFr.click();
  }

  clickPurchaseLi() {
    this.liPurchase.click();
  }

  isVisibleButtonAmazon() {
    this.buttonAmazon.should('be.visible');
  }

  clickBlogLi() {
    this.liBlog.click();
  }

  clickReadMyBlogButton() {
    this.buttonReadMyBlog.click();
  }

  isVisibleLifeStyleSection() {
    this.sectionLifeStyle.should('be.visible');
  }

  verifyAmazonFrLink(link) {
    this.linkAmazonFr.should('have.attr', 'href', link);
  }

  verifyAmazonDeLink(link) {
    this.linkAmazonDe.should('have.attr', 'href', link);
  }
}

export default new Homepage();
