import { Baywav02Page } from './app.po';

describe('baywav02 App', () => {
  let page: Baywav02Page;

  beforeEach(() => {
    page = new Baywav02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('baywa works!');
  });
});
