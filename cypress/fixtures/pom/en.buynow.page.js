class BuyNow {
    get liAmazonCom() {
        return cy.get('#cardtitle1_776388310');
    }
    get liAmazonCa() {
        return cy.get('#cardtitle2_776388310');
    }
    get liAmazonKindle() {
        return cy.get('#cardtitle3_776388310');
    }

    verifyTheTextAmazonCa(text) {
        this.liAmazonCa.should("have.text", text);
    }

    verifyTheTextAmazonCom(text) {
        this.liAmazonCom.should("have.text", text);
    }

    verifyTheTextAmazonKindle(text) {
        this.liAmazonKindle.should("have.text", text);
    }
}

export default new BuyNow();