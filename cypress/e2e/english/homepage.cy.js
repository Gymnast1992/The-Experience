const { before } = require('lodash');
import Homepage from '../../fixtures/pom/en/homepage';
import BlogPage from '../../fixtures/pom/en/blog.page';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/en');
  });

  it('TC_01, Verify homepage page title is displayed correctly', () => {
    Homepage.mainTitle.should('have.text', 'The Experience');
  });

  it('TC_02, Verify EN and FR language buttons are visible in the header', () => {
    Homepage.buttonHambMenu.click({ force: true });
    Homepage.buttonEn.should('have.text', 'EN');
    Homepage.buttonFr.should('have.text', 'FR');
  });

  it('TC_03, Verify user can switch language from English to French', () => {
    Homepage.buttonHambMenu.click({ force: true });
    Homepage.buttonFr.click();
    Homepage.mainTitle.should('have.text', "l'Expérience");
  });

  it('TC_04, Verify 3 header buttons are displayed in the hamburger menu', () => {
    Homepage.buttonHambMenu.click({ force: true });
    Homepage.listingsHambMenu.should('have.length', 3);
    Homepage.liAboutTheBook.should('have.text', ' About the book ');
    Homepage.liPurchase.should('have.text', ' Purchase ');
    Homepage.liBlog.should('have.text', ' Blog ');
  });

  it('TC_05, Verify "About the Book" button is clickable and navigates to the correct section', () => {
    Homepage.buttonHambMenu.click({ force: true });
    Homepage.liAboutTheBook.click();
    Homepage.buttonBuyTheBook.should('be.visible');
  });

  it('TC_06, Verify "Purchase" button is clickable and navigates to the correct section', () => {
    Homepage.buttonHambMenu.click({ force: true });
    Homepage.liPurchase.click();
    Homepage.buttonAmazon.should('be.visible');
  });

  it('TC_07, Verify "Blog" button is clickable and navigates to the correct section', () => {
    Homepage.buttonHambMenu.click({ force: true });
    Homepage.liBlog.click();
    BlogPage.mainTitle.should('be.visible');
  });

  it('TC_08, Verify "Read my blog" button is clickable and navigates to the correct section', () => {
    Homepage.buttonReadMyBlog.click();
    BlogPage.mainTitle.should('be.visible');
  });

  it('TC_09, Verify #lifestyle section on the page', () => {
    Homepage.sectionLifeStyle.should('be.visible');
  });

  it('TC_10, Verify French Amazon link', () => {
    cy.get('[href="https://amzn.eu/6BpwhAi"]').eq(1).should('have.attr', 'href', 'https://amzn.eu/6BpwhAi');
  })

  it('TC_10, Verify French Amazon link', () => {
    cy.get('[href="https://amzn.eu/d/09Xg7SG3"]').eq(0).should('have.attr', 'href', 'https://amzn.eu/d/09Xg7SG3');
  })
});
