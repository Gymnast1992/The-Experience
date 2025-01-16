import Homepage from "../fixtures/pom/en.home.page";
import data from "../fixtures/data/data.json"

describe("Homepage", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("TC01, Should navigate to the homepage", () => {
      Homepage.isVisibleTitle();
      Homepage.titleShouldHaveText(data.text);
    });
  
    it("TC02, EN and FR language logos should be visible", () => {
      Homepage.clickHumbMenu();
      Homepage.isVisibleLangSection();
      Homepage.langShouldHaveText(data.UAandFR);
    });
  
    it("TC03, Should verify the length of the header listings", () => {
      Homepage.clickHumbMenu();
      Homepage.liShouldHaveLength(3);
      Homepage.firstLiShouldHaveText(data.About);
      Homepage.secondLiShouldHaveText(data.Contacts);
      Homepage.thirdLiShouldHaveText(data.BuyNow);
    })
  });