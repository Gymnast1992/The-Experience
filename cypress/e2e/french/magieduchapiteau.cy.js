import magieduchapiteauPage from "../../fixtures/pom/fr/magieduchapiteau.page";
const mainTitleBlogTextFr = 'La Magie du Chapiteau';

describe('MagieduChapiteau', () => {
  beforeEach(() => {
    cy.visit('/blog_fr/magie_du_chapiteau');
  });

  it('TC_01, Verify the main title on the page', () => {
    magieduchapiteauPage.verifyMainTitleText(mainTitleBlogTextFr);
  })

  it('TC_02, Verify the length of pictures listing', () => {
    magieduchapiteauPage.verifyLengthOfTheLi(13);
  });
});
