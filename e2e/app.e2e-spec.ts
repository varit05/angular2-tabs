import { Angular2TabsPage } from './app.po';

describe('angular2-tabs App', function() {
  let page: Angular2TabsPage;

  beforeEach(() => {
    page = new Angular2TabsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
