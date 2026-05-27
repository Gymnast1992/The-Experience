import magieduchapiteauPage from '../../fixtures/pom/fr/magieduchapiteau.page';
import homepage from '../../fixtures/pom/fr/homepage';
const mainTitleBlogTextFr = 'La Magie du Chapiteau';
const mainTitleHomepageFr = "l'Expérience";

describe('MagieduChapiteau', () => {
  beforeEach(() => {
    cy.visit('/blog_fr/magie_du_chapiteau');
  });

  it('TC_01, Verify the main title on the page', () => {
    magieduchapiteauPage.verifyMainTitleText(mainTitleBlogTextFr);
  });

  it('TC_02, Verify the length of pictures listing', () => {
    magieduchapiteauPage.verifyLengthOfTheLi(13);
  });

  it('TC_03, Verify "Homepage" button navigates to the homepage', () => {
    magieduchapiteauPage.clickReturnHomeBtn();
    homepage.verifyMainTitleTextFr(mainTitleHomepageFr);
  });
});
