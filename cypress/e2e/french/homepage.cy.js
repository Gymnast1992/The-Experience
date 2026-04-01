import Homepage from '../../fixtures/pom/fr/homepage';
import BlogPage from '../../fixtures/pom/fr/blog.page';
const mainTitleBlogText =
  `"Ma vie est un livre que j'écris en ce moment même, et j'aimerais la vivre de façon magnifique." Maksym Semiankiv `;
const mainTitleTextFr = "l'Expérience";
const mainTitleTextEn = 'The Experience';
const firstHeaderLi = ' À propos du livre ';
const secondHeaderLi = ' Achat ';
const thirdHeaderLi = ' Blog ';
const linkAmazonUS = 'https://amazon.com/dp/1779418388';
const linkAmazonFR = 'https://amzn.eu/6BpwhAi';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('TC_01, Verify homepage page title is displayed correctly', () => {
    Homepage.verifyMainTitleFr(mainTitleTextFr);
  });

  it('TC_02, Verify EN and FR language buttons are visible in the header', () => {
    Homepage.clickHambMenuButton();
    Homepage.verifyEnglishButton();
    Homepage.verifyFrenchButton();
  });

  it('TC_03, Verify user can switch language from French to English', () => {
    Homepage.clickEnglishButton();
    Homepage.verifyMainTitleEn(mainTitleTextEn);
  });

  it('TC_04, Verify 3 header buttons are displayed in the hamburger menu', () => {
    Homepage.clickHambMenuButton();
    Homepage.verifyHeaderLiLength(3);
    Homepage.verifyFirstHeaderLi(firstHeaderLi);
    Homepage.verifySecondHeaderLi(secondHeaderLi);
    Homepage.verifyThirdHeaderLi(thirdHeaderLi);
  });

  it('TC_05, Verify "À propos du livre" button is clickable and navigates to the correct section', () => {
    Homepage.clickHambMenuButton();
    Homepage.clickFirstHeaderLi();
    Homepage.isVisibleActionButton();
  });

  it('TC_06, Verify "Achat" button is clickable and navigates to the correct section', () => {
    Homepage.clickHambMenuButton();
    Homepage.clickSecondHeaderLi();
    Homepage.verifyAmazonCard();
  });

  it('TC_07, Verify "Blog" button is clickable and navigates to the correct section', () => {
    Homepage.clickHambMenuButton();
    Homepage.clickThirdHeaderLi();
    BlogPage.verifyMainTitleBlogText(mainTitleBlogText);
  });

  it('TC_08, Verify "En savoir plus" button is clickable and navigates to the correct section', () => {
    Homepage.clickEnSavoirPlusButton();
    Homepage.verifyAuthorName();
  });

  it('TC_09, Verify #Styledevie section on the page', () => {
    Homepage.verifyStyleDeVieTitle();
  });

  it('TC_10, Verify US Amazon link', () => {
    Homepage.verifyAmazonUSLink(linkAmazonUS);
  });

  it('TC_11, Verify French Amazon link', () => {
    Homepage.verifyAmazonFRLink(linkAmazonFR);
  });
});
