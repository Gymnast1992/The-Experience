const text =
  "Ma vie est un livre que j'écris en ce moment même, et j'aimerais la vivre de façon magnifique.";

describe('Blog', () => {
  beforeEach(() => {
    cy.visit('/blog_fr');
  });

  it('TC_01, Verify the main text is displayed in the page heading', () => {
    cy.contains(text).should('be.visible');
  });

  it('TC_02, Verify image "Lart dans lair" is clickable and redirects to the correct page', () => {
    cy.get('.t-bgimg').eq(0).click();
    cy.contains('#trapèzevolant').should('be.visible');
  });

  it('TC_03, Verify image "La Magie du Chapiteau" is clickable and navigates to the correct page', () => {
    cy.get('.t-bgimg').eq(1).click();
    cy.get('.t-uptitle_sm').should('have.text', "L'expérience");
  });
});
