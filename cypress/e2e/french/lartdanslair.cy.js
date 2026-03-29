import lartdanslairPage from '../../fixtures/pom/fr/lartdanslair.page';
import homepage from '../../fixtures/pom/fr/homepage';
const mainTitleText = 'LA FORMATION';
const mainTitleHomepageFr = "l'Expérience";

describe("Lart dans lair", () => {
  beforeEach(() => {
    cy.visit('blog_fr/lart_dans_lair');
  });

  it('TC_01, Verify "Lart dans lair" page is displayed correctly', () => {
    lartdanslairPage.verifyMainTitleText(mainTitleText);
  });

  it('TC_02, Verify " Retour à laccueil " button navigates to the homepage', () => {
    lartdanslairPage.clickReturnHomeButtonFr();
    homepage.verifyMainTitleTextFr(mainTitleHomepageFr);
  });
});
