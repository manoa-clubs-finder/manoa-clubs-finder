import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { adminHomePage } from './adminhome.page';
import { clubAdminHomePage } from './clubadminhome.page';
import { userHomePage } from './userhome.page';
import { clubSearchPage } from './clubsearch.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentialsUser = { username: 'clubuser', password: 'changeme' };
const credentialsAdmin = { username: 'admin', password: 'changeme' };
const credentialsClubAdmin = { username: 'clubadmin', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
    .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsUser.username, credentialsUser.password);
  await navBar.isLoggedIn(testController, credentialsUser.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that user homepage work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsUser.username, credentialsUser.password);
  await navBar.isLoggedIn(testController, credentialsUser.username);
  await navBar.gotoUserHomePage(testController);
  await userHomePage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that admin homepage work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsAdmin.username, credentialsAdmin.password);
  await navBar.isLoggedIn(testController, credentialsAdmin.username);
  await navBar.gotoAdminHomePage(testController);
  await adminHomePage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that clubadmin homepage work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsClubAdmin.username, credentialsClubAdmin.password);
  await navBar.isLoggedIn(testController, credentialsClubAdmin.username);
  await navBar.gotoClubAdminHomePage(testController);
  await clubAdminHomePage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that clubsearch works for all roles', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsAdmin.username, credentialsAdmin.password);
  await navBar.isLoggedIn(testController, credentialsAdmin.username);
  await navBar.gotoClubSearchPage(testController);
  await clubSearchPage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsClubAdmin.username, credentialsClubAdmin.password);
  await navBar.isLoggedIn(testController, credentialsClubAdmin.username);
  await navBar.gotoClubSearchPage(testController);
  await clubSearchPage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentialsUser.username, credentialsUser.password);
  await navBar.isLoggedIn(testController, credentialsUser.username);
  await navBar.gotoClubSearchPage(testController);
  await clubSearchPage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});
