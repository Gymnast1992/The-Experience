
describe("Buy now", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("User should be able to switch language from FR to EN.", () => {
    cy.contains("EN").click({force: true});
    cy.contains("The Experience").should("be.visible");
  });

});
