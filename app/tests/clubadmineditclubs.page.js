import { Selector } from 'testcafe';

class ClubAdminEditClubsPage {
  constructor() {
    this.pageId = '#clubadmineditclubs-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Pull down login menu, go to list stuff page. */
  async gotoEditPage(testController) {
    await testController.click('#edit-page');
  }
}

export const clubAdminEditClubsPage = new ClubAdminEditClubsPage();
