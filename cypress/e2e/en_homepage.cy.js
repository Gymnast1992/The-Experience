const { before } = require('lodash');

describe('Homepage_FR', () => {
  beforeEach(() => {
    cy.visit('/en');
  });

  it('TC_01, User should be able to switch language from FR to EN.', () => {
    cy.contains('EN').click({ force: true });
    cy.contains('The Experience').should('be.visible');
  });

  it('TC_02, User should be able to switch language from EN to FR.', () => {
    cy.contains('EN').click({ force: true });
    cy.contains('FR').click({ force: true });
    cy.contains("L'expérience").should('be.visible');
  });

  it('TC_03, Verify buttons in the header in the humburger menu', () => {
    cy.get('a [type="button"]').click({ force: true });
    cy.get('li.t199__menu-item-wrap').should('have.length', 3);
    cy.get('li.t199__menu-item-wrap')
      .eq(0)
      .should('have.text', ' About the book ');
    cy.get('li.t199__menu-item-wrap').eq(1).should('have.text', ' Purchase ');
    cy.get('li.t199__menu-item-wrap').eq(2).should('have.text', ' Blog ');
  });

  it('TC_04, Verifying buttons EN and FR in the header', () => {
    cy.get('a [type="button"]').click({ force: true });
    cy.get('[class="t199__lang-item"]').should('have.length', 2);
    cy.get('[class="t199__lang-item"]').eq(0).should('have.text', 'EN');
    cy.get('[class="t199__lang-item"]').eq(1).should('have.text', 'FR');
  });

  it('TC_05, Verifying that button Á propos du livre is clickable and navigate user to the correct section', () => {
    cy.get('a [type="button"]').click({ force: true });
    cy.contains('About the book').click();
    cy.get('.t814__btn').eq(1).should('be.visible');
  });

  it('TC_06, Verifying that button Achat is clickable and navigate user to the correct section', () => {
    cy.get('a [type="button"]').click({ force: true });
    cy.contains('Purchase').click();
    cy.get('.t-card__col').should('be.visible');
  });

  it('TC_07, Verifying that button Blog is clickable and navigate user to the correct section', () => {
    cy.get('a [type="button"]').click({ force: true });
    cy.contains('Blog').click();
    cy.get('h1[field="title"]').should('be.visible');
  });
});
