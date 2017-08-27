import { SailingBoatsPage } from './app.po';

describe('sailing-boats App', () => {
  let page: SailingBoatsPage;

  beforeEach(() => {
    page = new SailingBoatsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
