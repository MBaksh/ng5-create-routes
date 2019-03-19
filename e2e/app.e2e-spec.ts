import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Testing google', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    page.setText();
    page.click();
    browser.pause();
    expect(page.getText()).toEqual('Settings');
  });
});
