
describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("User should be able to switch language from FR to EN.", () => {
    cy.contains("EN").click({force: true});
    cy.contains("The Experience").should("be.visible");
  });

  it("User should be able to switch language from EN to FR.", () => {
    cy.contains("EN").click({force: true});
    cy.contains("FR").click({force: true});
    cy.contains("L'expérience").should("be.visible");
  });

});
