const { before } = require('lodash');

describe('In_the_air', () => {
  beforeEach(() => {
    cy.visit('/page108178006.html');
  });

  it('TC_01, Verify that button "Take me home" works correctly', () => {
    cy.get('.t-menu-base__logo').click();
    cy.get('h1.t102__title.t-title').should('have.text', "l'Expérience");
  });
});
