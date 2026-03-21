const { before } = require('lodash');

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('TC_01, Verify homepage page title is displayed correctly', () => {
    cy.get('h1.t-title').should('have.text', "l'Expérience");
  });

  it('TC_02, Verify EN and FR language buttons are visible in the header', () => {
    cy.get('a [type="button"]').click({ force: true });
    cy.get('[class="t199__lang-item"]').eq(0).should('have.text', 'EN');
    cy.get('[class="t199__lang-item"]').eq(1).should('have.text', 'FR');
  });

  it('TC_03, Verify user can switch language from French to English', () => {
    cy.contains('EN').click({ force: true });
    cy.get('h1.t-title').should('have.text', 'The Experience');
  });

  it('TC_04, Verify 3 header buttons are displayed in the hamburger menu', () => {
    cy.get('a [type="button"]').click({ force: true });
    cy.get('li.t199__menu-item-wrap').should('have.length', 3);
    cy.get('li.t199__menu-item-wrap')
      .eq(0)
      .should('have.text', ' À propos du livre ');
    cy.get('li.t199__menu-item-wrap').eq(1).should('have.text', ' Achat ');
    cy.get('li.t199__menu-item-wrap').eq(2).should('have.text', ' Blog ');
  });

  it('TC_05, Verify "À propos du livre" button is clickable and navigates to the correct section', () => {
    cy.get('a [type="button"]').click({ force: true });
    cy.contains('À propos du livre').click();
    cy.get('.t814__btn').eq(1).should('be.visible');
  });

  it('TC_06, Verify "Achat" button is clickable and navigates to the correct section', () => {
    cy.get('a [type="button"]').click({ force: true });
    cy.contains('Achat').click();
    cy.get('.t-card__col').should('be.visible');
  });

  it('TC_07, Verify "Blog" button is clickable and navigates to the correct section', () => {
    cy.get('a [type="button"]').click({ force: true });
    cy.contains('Blog').click();
    cy.get('h1[field="title"]').should('be.visible');
  });

  it('TC_08, Verify "En savoir plus" button is clickable and navigates to the correct section', () => {
    cy.get('a.t-btn').eq(0).click();
    cy.contains('Maksym Semiankiv').should('be.visible');
  });

  it('TC_09, Verify #Styledevie section on the page', () => {
    cy.contains('#Styledevie').should('be.visible');
  });

  it('TC_10, Verify US Amazon link', () => {
    cy.get('[href="https://amazon.com/dp/1779418388"]').should(
      'have.attr',
      'href',
      'https://amazon.com/dp/1779418388',
    );
  });

  it('TC_11, Verify French Amazon link', () => {
    cy.get('[href="https://amzn.eu/6BpwhAi"]')
      .eq(0)
      .should('have.attr', 'href', 'https://amzn.eu/6BpwhAi');
  });
});
