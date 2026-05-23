import blogPage from '../../fixtures/pom/fr/blog.page';
import lartdanslairPage from '../../fixtures/pom/fr/lartdanslair.page';
import magieduchapiteauPage from '../../fixtures/pom/fr/magieduchapiteau.page';
import homepage from '../../fixtures/pom/fr/homepage';
const mainTitleBlogText = `"Ma vie est un livre que j'écris en ce moment même, et j'aimerais la vivre de façon magnifique." Maksym Semiankiv `;
const mainTitleBlogTextFr = 'La Magie du Chapiteau';
const mainTitleHomepageFr = "l'Expérience";

describe('Blog_fr', () => {
  beforeEach(() => {
    cy.visit('/blog_fr');
  });

  it('TC_01, Verify the main text is displayed in the page heading', () => {
    blogPage.verifyMainTitleBlogText(mainTitleBlogText);
  });

  it('TC_02, Verify image "Lart dans lair" is clickable and redirects to the correct page', () => {
    blogPage.clickLartDansLairImage();
    lartdanslairPage.isVisibleTitle();
  });

  it('TC_03, Verify image "La Magie du Chapiteau" is clickable and navigates to the correct page', () => {
    blogPage.clickMagieDuChapiteauImage();
    magieduchapiteauPage.verifyMainTitleText(mainTitleBlogTextFr);
  });

  it('TC_04, Verify "Return Home" button navigates to the homepage', () => {
    blogPage.clickReturnHomeBtn();
    homepage.verifyMainTitleTextFr(mainTitleHomepageFr);
  });
});
