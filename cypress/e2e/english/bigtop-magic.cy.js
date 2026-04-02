import bigtopPage from '../../fixtures/pom/en/bigtop.page';
const mainTitleTextEn = 'Big Top Magic';

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
});
