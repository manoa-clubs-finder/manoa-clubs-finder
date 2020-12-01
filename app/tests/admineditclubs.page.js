import { Selector } from 'testcafe';

class AdminEditClubsPage {
  constructor() {
    this.pageId = '#admineditclubs-page';
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

export const adminEditClubsPage = new AdminEditClubsPage();
