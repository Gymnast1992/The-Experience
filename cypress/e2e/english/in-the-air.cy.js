const { before } = require('lodash');

describe('In_the_air', () => {
  beforeEach(() => {
    cy.visit('/blog_en/in_the_air');
  });

  it('TC_01, Verify "#in_the_air" page is displayed correctly', () => {
    cy.get('.t001__title').should('contain.text', 'PRACTICE');
  });

  it('TC_02, Verify "Take me home" button navigates to the homepage', () => {
    cy.get('.t-menu-base__logo').click();
    cy.get('h1.t102__title.t-title').should('have.text', 'The Experience');
  });
});
