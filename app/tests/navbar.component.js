import { Selector } from 'testcafe';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout(testController) {
    const loggedInUser = await Selector('#navbar-current-user').exists;
    if (loggedInUser) {
      await testController.click('#navbar-current-user');
      await testController.click('#navbar-sign-out');
    }
  }

  async gotoSigninPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-in');
  }

  /** Check that the specified user is currently logged in. */
  async isLoggedIn(testController, username) {
    const loggedInUser = Selector('#navbar-current-user').innerText;
    await testController.expect(loggedInUser).eql(username);
  }

  /** Check that someone is logged in, then click items to logout. */
  async logout(testController) {
    await testController.expect(Selector('#navbar-current-user').exists).ok();
    await testController.click('#navbar-current-user');
    await testController.click('#navbar-sign-out');
  }

  /** Pull down login menu, go to sign up page. */
  async gotoSignupPage(testController) {
    await this.ensureLogout(testController);
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-up');
  }

  /** Pull down login menu, go to list stuff page. */
  async gotoAdminHomePage(testController) {
    await testController.click('#navbar-admin-home');
  }

  /** Pull down login menu, go to list stuff page. */
  async gotoClubAdminHomePage(testController) {
    await testController.click('#navbar-club-admin-home');
  }

  /** Pull down login menu, go to list stuff page. */
  async gotoUserHomePage(testController) {
    await testController.click('#navbar-user-home');
  }

  /** Pull down login menu, go to list stuff page. */
  async gotoClubSearchPage(testController) {
    await testController.click('#navbar-club-search');
  }

  /** Pull down login menu, go to list stuff page. */
  async gotoAdminEditClubsPage(testController) {
    await testController.click('#navbar-admin-edit-club');
  }

  /** Pull down login menu, go to list stuff page. */
  async gotoClubAdminEditClubsPage(testController) {
    await testController.click('#navbar-club-admin-edit-club');
  }

  /** Pull down login menu, go to list stuff page. */
  async gotoEditRolePage(testController) {
    await testController.click('#navbar-change-role');
  }
}

export const navBar = new NavBar();
