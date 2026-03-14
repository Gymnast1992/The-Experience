const text =
  "My life is a book I'm writing right now, and I would like to live it beautifully.";

describe('EN_myblog', () => {
  beforeEach(() => {
    cy.visit('/my_blog_en');
  });

  it('TC_01, Verify the main text is displayed in the page heading', () => {
    cy.contains(text).should('be.visible');
  });

  it('TC_02, Verify image "#in_the_air" is clickable and redirects to the correct page', () => {
    cy.get('.t-bgimg').eq(0).click();
    cy.contains('#flyingtrapeze').should('be.visible');
  });

  it('TC_03, Verify image "#bigtop_magic" is clickable and navigates to the correct page', () => {
    cy.get('.t-bgimg').eq(1).click();
    cy.get('.t-uptitle_sm').should('have.text', 'The Experience');
  });
});
