const { before } = require('lodash');
import Homepage from '../../fixtures/pom/en/homepage';
import BlogPage from '../../fixtures/pom/en/blog.page';
import homepage from '../../fixtures/pom/fr/homepage';
const mainTitleTextEn = 'The Experience';
const mainTitleTextFr = "l'Expérience";
const linkAmazonFr = 'https://amzn.eu/6BpwhAi';
const linkAmazonDe = 'https://amzn.eu/d/09Xg7SG3';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/en');
  });

  it('TC_01, Verify homepage page title is displayed correctly', () => {
    Homepage.verifyMainTitle(mainTitleTextEn);
  });

  it('TC_02, Verify EN and FR language buttons are visible in the header', () => {
    Homepage.clickHambMenu();
    Homepage.verifyLangButtonEN();
    Homepage.verifyLangButtonFR();
  });

  it('TC_03, Verify user can switch language from English to French', () => {
    Homepage.clickHambMenu();
    Homepage.clickOnButtonFr();
    homepage.verifyMainTitleTextFr(mainTitleTextFr);
  });

  it('TC_04, Verify 3 header buttons are displayed in the hamburger menu', () => {
    Homepage.clickHambMenu();
    Homepage.verifyLengthHambMenuLi(3);
    Homepage.verifyAboutTheBookLi();
    Homepage.verifyPurchaseLi();
    Homepage.verifyBlogLi;
  });

  it('TC_05, Verify "About the Book" button is clickable and navigates to the correct section', () => {
    Homepage.clickHambMenu();
    Homepage.clickOnAboutTheBookLi();
    Homepage.verifyBuyTheBookButton();
  });

  it('TC_06, Verify "Purchase" button is clickable and navigates to the correct section', () => {
    Homepage.clickHambMenu();
    Homepage.clickPurchaseLi();
    Homepage.isVisibleButtonAmazon();
  });

  it('TC_07, Verify "Blog" button is clickable and navigates to the correct section', () => {
    Homepage.clickHambMenu();
    Homepage.clickBlogLi();
    BlogPage.isVisibleMainTitleEn;
  });

  it('TC_08, Verify "Read my blog" button is clickable and navigates to the correct section', () => {
    Homepage.clickReadMyBlogButton();
    BlogPage.isVisibleMainTitleEn();
  });

  it('TC_09, Verify #lifestyle section on the page', () => {
    Homepage.isVisibleLifeStyleSection();
  });

  it('TC_10, Verify Germany Amazon link', () => {
    Homepage.verifyAmazonFrLink(linkAmazonFr);
  });

  it('TC_11, Verify French Amazon link', () => {
    Homepage.verifyAmazonDeLink(linkAmazonDe);
  });
});
