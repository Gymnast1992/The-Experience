const { before } = require('lodash');

describe('Homepage_FR', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('TC_01, User should be able to switch language from FR to EN.', () => {
    cy.contains('EN').click({ force: true });
    cy.contains('The Experience').should('be.visible');
  });

  it('TC_03, Verify buttons in the header in the humburger menu', () => {
    cy.get('a [type="button"]').click({ force: true });
    cy.get('li.t199__menu-item-wrap').should('have.length', 3);
    cy.get('li.t199__menu-item-wrap')
      .eq(0)
      .should('have.text', ' À propos du livre ');
    cy.get('li.t199__menu-item-wrap').eq(1).should('have.text', ' Achat ');
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
    cy.contains('À propos du livre').click();
    cy.get('.t-btntext__text').should('be.visible');
  });

  it('TC_06, Verifying that button Achat is clickable and navigate user to the correct section', () => {
    cy.get('a [type="button"]').click({ force: true });
    cy.contains('Achat').click();
    cy.get('[id="cardtitle2_1756752951"]').should('be.visible');
  });

  it('TC_07, Verifying that button Blog is clickable and navigate user to the correct section', () => {
    cy.get('a [type="button"]').click({ force: true });
    cy.contains('Blog').click();
    cy.get('h1[field="title"]').should('be.visible');
  });
});
