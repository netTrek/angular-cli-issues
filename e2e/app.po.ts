import { browser, by, element } from 'protractor';

export class Baywav02Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('baywa-root h1')).getText();
  }
}
