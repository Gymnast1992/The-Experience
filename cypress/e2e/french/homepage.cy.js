import Homepage from '../../fixtures/pom/fr/homepage';
import BlogPage from '../../fixtures/pom/fr/blog.page';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('TC_01, Verify homepage page title is displayed correctly', () => {
    Homepage.mainTitleFr.should('have.text', "l'Expérience");
  });

  it('TC_02, Verify EN and FR language buttons are visible in the header', () => {
    Homepage.buttonHambMenu.click({ force: true });
    Homepage.buttonEn.should('have.text', 'EN');
    Homepage.buttonFr.should('have.text', 'FR');
  });

  it('TC_03, Verify user can switch language from French to English', () => {
    Homepage.buttonEn.click({ force: true });
    Homepage.mainTitleFr.should('have.text', 'The Experience');
  });

  it('TC_04, Verify 3 header buttons are displayed in the hamburger menu', () => {
    Homepage.buttonHambMenu.click({ force: true });
    Homepage.headerLi.should('have.length', 3);
    Homepage.headerLi.eq(0).should('have.text', ' À propos du livre ');
    Homepage.headerLi.eq(1).should('have.text', ' Achat ');
    Homepage.headerLi.eq(2).should('have.text', ' Blog ');
  });

  it('TC_05, Verify "À propos du livre" button is clickable and navigates to the correct section', () => {
    Homepage.buttonHambMenu.click({ force: true });
    Homepage.headerLi.eq(0).click();
    Homepage.buttonAction.should('be.visible');
  });

  it('TC_06, Verify "Achat" button is clickable and navigates to the correct section', () => {
    Homepage.buttonHambMenu.click({ force: true });
    Homepage.headerLi.eq(1).click();
    Homepage.cardAmazon.should('be.visible');
  });

  it('TC_07, Verify "Blog" button is clickable and navigates to the correct section', () => {
    Homepage.buttonHambMenu.click({ force: true });
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
