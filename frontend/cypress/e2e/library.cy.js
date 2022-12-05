/// <reference types="Cypress" />

describe('Biblioteca', () => {
  beforeEach(() => {
    localStorage.setItem(
      'AuthToken',
      'eyJhbGciOiJIUzI1NiJ9.eyJJc3N1ZXIiOiJha2xtIiwiVXNlcm5hbWUiOiJ0ZXN0ZUBlbWFpbC5jb20ifQ.8kezcsjN7OKr0pnCwek26NnJlxaLl2tGz1SjSDD5Mso'
    );
    cy.visit('/minha-biblioteca');
  });

  afterEach(() => {
    localStorage.removeItem('AuthToken');
  });

  it('a página contém as 3 seções dela', () => {
    cy.contains('Meus livros');
    cy.contains('Minha lista de desejos');
    cy.contains('Sugestões');
  });
});
