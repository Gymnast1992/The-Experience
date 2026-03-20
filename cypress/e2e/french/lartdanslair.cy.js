const { before } = require('lodash');

describe("L'art dans l'air", () => {
  beforeEach(() => {
    cy.visit('blog_fr/lart_dans_lair');
  });

  it('TC_01, Verify "Lart dans lair" page is displayed correctly', () => {
    cy.get('.t001__title').should('contain.text', 'LA FORMATION');
  });

  it('TC_02, Verify " Retour à laccueil " button navigates to the homepage', () => {
    cy.get('.t-menu-base__logo').click();
    cy.get('h1.t102__title.t-title').should('have.text', "l'Expérience");
  });
});
