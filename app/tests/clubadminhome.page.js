import { Selector } from 'testcafe';

class ClubAdminHomePage {
  constructor() {
    this.pageId = '#clubadminhome-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const clubAdminHomePage = new ClubAdminHomePage();
