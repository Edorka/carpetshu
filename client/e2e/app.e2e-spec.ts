import { CarpetshuAppPage } from './app.po';

describe('carpetshu-app App', () => {
  let page: CarpetshuAppPage;

  beforeEach(() => {
    page = new CarpetshuAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
