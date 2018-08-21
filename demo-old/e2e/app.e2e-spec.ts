import { DemoOldPage } from './app.po';

describe('demo-old App', () => {
  let page: DemoOldPage;

  beforeEach(() => {
    page = new DemoOldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
