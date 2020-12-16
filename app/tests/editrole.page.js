import { Selector } from 'testcafe';

class EditRolePage {
  constructor() {
    this.pageId = '#editrole-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const editRolePage = new EditRolePage();
