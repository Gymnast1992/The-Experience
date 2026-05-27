import bigtopPage from '../../fixtures/pom/en/bigtop.page';
import Homepage from '../../fixtures/pom/en/homepage';
const mainTitleTextEn = 'Big Top Magic';
const mainTitleHomepageEn = 'The Experience';

describe('Bigtop-magic', () => {
  beforeEach(() => {
    cy.visit('/blog_en/bigtop_magic');
  });

  it('TC_01, Verify the main title on the page', () => {
    bigtopPage.verifyMainTitleText(mainTitleTextEn);
  });

  it('TC_02, Verify the length of pictures listing', () => {
    bigtopPage.verifyTheLengthOfTheLi(12);
  });

  it('TC_03, Verify "Homepage" button navigates to the homepage', () => {
    bigtopPage.clickTakeMeHomeBtn();
    Homepage.verifyMainTitle(mainTitleHomepageEn);
  });
});
