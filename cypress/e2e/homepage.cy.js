
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

  it("The header should verify three buttons in the header ('About the book', 'Blog', 'Purchase')", () => {
    cy.get('a [type="button"]').click({force: true});
    cy.get('li.t199__menu-item-wrap').should("have.length", 3);
    cy.get('li.t199__menu-item-wrap').eq(0).should("have.text", " À propos du livre ");
    cy.get('li.t199__menu-item-wrap').eq(1).should("have.text", " Achat ");
    cy.get('li.t199__menu-item-wrap').eq(2).should("have.text", " Blog ");
  })

  it("User should verify buttons EN and FR in the header", () => {
    cy.get('a [type="button"]').click({force: true});
    cy.get('[class="t199__lang-item"]').should("have.length", 2);
    cy.get('[class="t199__lang-item"]').eq(0).should("have.text", "EN");
    cy.get('[class="t199__lang-item"]').eq(1).should("have.text", "FR");
  })
});
