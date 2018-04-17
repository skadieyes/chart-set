import { TestaaaPage } from './app.po';

describe('testaaa App', () => {
  let page: TestaaaPage;

  beforeEach(() => {
    page = new TestaaaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
