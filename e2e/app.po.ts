import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    browser.waitForAngularEnabled(false);

    return browser.get('https://www.google.com/');
  }

  click() {
    return element(by.xpath('//*[@id="tsf"]/div[2]/div/div[3]/center/input[1]')).click();
  }
  setText() {
    return element(by.name('q')).sendKeys('Apple');
  }
  getText() {
    return element(by.id('abar_button_opt')).getText();
  }
}
