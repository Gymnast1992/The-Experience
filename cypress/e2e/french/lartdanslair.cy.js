const { before } = require('lodash');

describe("L'art dans l'air", () => {
  beforeEach(() => {
    cy.visit('/page108178006.html');
  });

  it('TC_01, Verify "Lart dans lair" page is displayed correctly', () => {
    cy.get('div [class="t-col t-col_4"]')
      .eq(0)
      .should('contain.text', '#trapèzevolant');
  });

  it('TC_02, Verify " Retour à laccueil " button navigates to the homepage', () => {
    cy.get('.t-menu-base__logo').click();
    cy.get('h1.t102__title.t-title').should('have.text', "l'Expérience");
  });
});
