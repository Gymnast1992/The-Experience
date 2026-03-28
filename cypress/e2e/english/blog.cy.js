import blogPage from '../../fixtures/pom/en/blog.page';
import inTheAirPage from '../../fixtures/pom/en/in-the-air.page';
import bigtopPage from '../../fixtures/pom/en/bigtop.page';
const mainTitleText = 'The Experience';

const text = `"My life is a book I'm writing right now, and I would like to live it beautifully." Maksym Semiankiv `;

describe('EN_myblog', () => {
  beforeEach(() => {
    cy.visit('/blog_en');
  });

  it('TC_01, Verify the main text is displayed in the page heading', () => {
    blogPage.verifyMainTitle(text);
  });

  it('TC_02, Verify image "#in_the_air" is clickable and redirects to the correct page', () => {
    blogPage.clickOnInTheAirImage();
    inTheAirPage.verifyTextFlyingTrapeze();
  });

  it('TC_03, Verify image "#bigtop_magic" is clickable and navigates to the correct page', () => {
    blogPage.clickOnBiogtopMagicImage();
    bigtopPage.verifyMainTitleText(mainTitleText);
  });
});
