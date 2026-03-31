import Homepage from '../../fixtures/pom/fr/homepage';
import BlogPage from '../../fixtures/pom/fr/blog.page';
const mainTitleTextFr = "l'Expérience";
const mainTitleTextEn = 'The Experience';
const firstHeaderLi = ' À propos du livre ';
const secondHeaderLi = ' Achat ';
const thirdHeaderLi = ' Blog ';

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
    Homepage.headerLi.eq(1).click();
    Homepage.cardAmazon.should('be.visible');
  });

  it('TC_07, Verify "Blog" button is clickable and navigates to the correct section', () => {
    Homepage.clickHambMenuButton();
    Homepage.headerLi.eq(2).click();
    BlogPage.mainBlogTitleText.should('be.visible');
  });

  it('TC_08, Verify "En savoir plus" button is clickable and navigates to the correct section', () => {
    Homepage.buttonEnSavoirPlus.click();
    Homepage.authorName.should('be.visible');
  });

  it('TC_09, Verify #Styledevie section on the page', () => {
    Homepage.titleStyleDeVie.should('be.visible');
  });

  it('TC_10, Verify US Amazon link', () => {
    Homepage.linkAmznUS.should(
      'have.attr',
      'href',
      'https://amazon.com/dp/1779418388',
    );
  });

  it('TC_11, Verify French Amazon link', () => {
    Homepage.linkAmznFR.should('have.attr', 'href', 'https://amzn.eu/6BpwhAi');
  });
});
