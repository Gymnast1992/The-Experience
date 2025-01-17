import data from "../fixtures/data/data.json";

describe("Buy now", () => {
    beforeEach(() => {
        cy.visit('/#rec776388308');
    })

    it("Should navigate to the buy now section and verify three Amazon images", () => {
        cy.get('#cardtitle1_776388310').should("have.text", data["Amazon.com"]);
        cy.get('#cardtitle2_776388310').should("have.text", "\nAmazon.ca\n");
        cy.get('#cardtitle3_776388310').should("have.text", "\nAmazon Kindle\n");
    })
})