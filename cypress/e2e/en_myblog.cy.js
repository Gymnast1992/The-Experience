const text =
  "My life is a book I'm writing right now, and I would like to live it beautifully.";

describe('EN_myblog', () => {
  beforeEach(() => {
    cy.visit('/my_blog_en');
  });

  it('TC_01, User should be able to see the text', () => {
    cy.contains(text).should('be.visible');
  });

  it('TC_02, User should be able to navigate to the lifestyle section', () => {
    cy.contains('#lifestyle').should('be.visible');
  });

  it('TC_03, Verify that image #in_the_air is clickable', () => {
    cy.get('.t-bgimg').eq(0).click();
    cy.contains('#flyingtrapeze').should('be.visible');
  });

  it('TC_04, Verify that image #bigtop_magic is clickable', () => {
    cy.get('.t-bgimg').eq(1).click();
    cy.get('.t-uptitle_sm').should('have.text', 'The Experience');
  });

  it('TC_05, Verify that button #in_the_air is clickable', () => {
    cy.get('[class="t-btnflex__text"]').eq(0).click();
    cy.contains('#flyingtrapeze').should('be.visible');
  });

  it('TC_06, Verify that button #bigtop_magic is clickable', () => {
    cy.get('[class="t-btnflex__text"]').eq(1).click();
    cy.get('.t-uptitle_sm').should('have.text', 'The Experience');
  });
});
