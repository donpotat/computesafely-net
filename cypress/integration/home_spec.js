import data from '../../config/data';

describe('Home', () => {
  before(() => {
    cy.visit('/');
  });

  it('should render footer', () => {
    cy.get('[data-cy="footer"]')
      .scrollIntoView()
      .should('be.visible');

    cy.get(`[href="https://creativecommons.org/share-your-work/public-domain/cc0/"]`).should(
      'be.visible'
    );
  });

  it('should render content', () => {
    const dataKeys = Object.keys(data);
    dataKeys.map(key => {
      cy.contains(data[key].title);
    });
  });
});
