import { LabAngularAuthenticationAppPage } from './app.po';

describe('lab-angular-authentication-app App', function() {
  let page: LabAngularAuthenticationAppPage;

  beforeEach(() => {
    page = new LabAngularAuthenticationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
