import data from "../fixtures/data/data.json";
import BuyNow from "../fixtures/pom/en.buynow.page";

describe("Buy now", () => {
  beforeEach(() => {
    cy.visit("/#rec776388308");
  });

  it("Should navigate to the buy now section and verify three Amazon images", () => {
    BuyNow.verifyTheTextAmazonCom(data["Amazon.com"]);
    BuyNow.verifyTheTextAmazonCa(data["Amazon.com.be"]);
    BuyNow.verifyTheTextAmazonKindle(data["Amazon.fr"]);
  });

  it("The link Amazon.com should be clickable", () => {
    cy.get("#cardtitle1_776388310").click();
    cy.origin("https://www.amazon.com/dp/1779418388", () => {
      cy.get('[id="title"]').should("be.visible");
    });
  });
});
