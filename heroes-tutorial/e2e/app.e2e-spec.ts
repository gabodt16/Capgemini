import { RouterTutorialPage } from './app.po';

describe('router-tutorial App', () => {
  let page: RouterTutorialPage;

  beforeEach(() => {
    page = new RouterTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
