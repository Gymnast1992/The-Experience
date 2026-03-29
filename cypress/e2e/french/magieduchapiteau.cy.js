import magieduchapiteauPage from "../../fixtures/pom/fr/magieduchapiteau.page";
const mainTitleTextFr = "L'expérience";

describe('MagieduChapiteau', () => {
  beforeEach(() => {
    cy.visit('/blog_fr/magie_du_chapiteau');
  });

  it('TC_01, Verify the main title on the page', () => {
    magieduchapiteauPage.verifyMainTitleText(mainTitleTextFr);
  })

  it('TC_02, Verify the length of pictures listing', () => {
    magieduchapiteauPage.verifyLengthOfTheLi(13);
  });
});
