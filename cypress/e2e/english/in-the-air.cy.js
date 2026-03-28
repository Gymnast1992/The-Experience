const { before } = require('lodash');
import Homepage from '../../fixtures/pom/en/homepage';
import inTheAirPage from '../../fixtures/pom/en/in-the-air.page';
const mainTitleText = 'PRACTICE';
const mainTitleHomepageEn = 'The Experience';

describe('In_the_air', () => {
  beforeEach(() => {
    cy.visit('/blog_en/in_the_air');
  });

  it('TC_01, Verify "#in_the_air" page is displayed correctly', () => {
    inTheAirPage.verifyMainTitleText(mainTitleText);
  });

  it('TC_02, Verify "Take me home" button navigates to the homepage', () => {
    inTheAirPage.clickTakeMeHomeButton();
    Homepage.verifyMainTitle(mainTitleHomepageEn);
  });
});
