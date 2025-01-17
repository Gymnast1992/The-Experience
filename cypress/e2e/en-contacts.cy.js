const email = " semiankiv@experience-book.com";
describe("Contacts", () => {
    beforeEach(() => {
        cy.visit('/#rec776388313')
    })

    it("TC05, Should navigate to the contacts section", () => {
        cy.get('p strong').should("have.text", "Email:");
        cy.contains(email).should("be.visible");
    })
})