const text = "My life is a book I'm writing right now, and I would like to live it beautifully."

describe("My_blog_en", () => {
  beforeEach(() => {
    cy.visit("/en");
    cy.contains("Read my blog").click();
  });

  it("User should be able to see the text", () => {
    cy.contains(text).should("be.visible");
  });

  it("User should be able to navigate to the lifestyle section", () => {
    cy.contains("#lifestyle").should("be.visible");
  });

});
