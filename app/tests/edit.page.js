import { Selector } from 'testcafe';

class EditPage {
  constructor() {
    this.pageId = '#edit-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const editPage = new EditPage();
