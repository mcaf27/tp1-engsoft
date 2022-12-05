/// <reference types="Cypress" />

const title = 'Fisgados pelo amor';
const author = 'Tessa Bailey';
const genre = 'Romance';
const cover =
  'https://img.skoob.com.br/48Dtb6UIE-eu3E2FO4VgUHcqSaM=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/12244316/FISGADOS_PELO_AMOR_166489446112244316SK-V11664894462B.jpg';

describe('exibição dos livros', () => {
  beforeEach(() => {
    localStorage.setItem(
      'AuthToken',
      'eyJhbGciOiJIUzI1NiJ9.eyJJc3N1ZXIiOiJha2xtIiwiVXNlcm5hbWUiOiJ0ZXN0ZUBlbWFpbC5jb20ifQ.8kezcsjN7OKr0pnCwek26NnJlxaLl2tGz1SjSDD5Mso'
    );
    cy.visit('/livros');
  });

  afterEach(() => {
    localStorage.removeItem('AuthToken');
  });

  // it('os filtros estão realmente mudando os livros exibidos', () => {
  //   cy.get('#genre-filters').contains('Suspense').click();

  //   cy.get('.livro').then((b) => b.contains('O Inocente'));
  //   cy.pause();
  // });

  it('a página 20 livros', () => {
    cy.get('.livro').should('have.length', 20);
  });

  it('a paginação deve ter 5 elementos', () => {
    cy.get('#books-pagination').children().children().should('have.length', 7);
  });

  it('o primeiro livro muda quando a página muda', () => {
    cy.get('.livro')
      .first()
      .children()
      .get('img')
      .invoke('attr', 'src')
      .then((img) => {
        cy.get('#books-pagination').children().children().last().click();

        cy.get('.livro')
          .first()
          .children()
          .get('img')
          .invoke('attr', 'src')
          .should('not.equal', img);
      });
  });
});

describe('cadastro de novos livros', () => {
  beforeEach(() => {
    localStorage.setItem(
      'AuthToken',
      'eyJhbGciOiJIUzI1NiJ9.eyJJc3N1ZXIiOiJha2xtIiwiVXNlcm5hbWUiOiJ0ZXN0ZUBlbWFpbC5jb20ifQ.8kezcsjN7OKr0pnCwek26NnJlxaLl2tGz1SjSDD5Mso'
    );
    cy.visit('/livros');
    cy.get('#criar-novo-livro').click().get('#novo-livro-modal');
  });

  afterEach(() => {
    localStorage.removeItem('AuthToken');
  });

  it('não consegue criar um novo livro quando não tem as informações necessárias', () => {
    cy.get('#titulo').type(title);
    cy.get('button[type="submit"]').click();

    cy.contains('O livro precisa de um autor.');
    cy.contains('O livro precisa de um gênero');
    cy.contains('O livro precisa de uma capa');
  });

  it('cria um livro novo com as informações corretas, ele aparece na página no início', () => {
    cy.get('#titulo').type(title);
    cy.get('#autor').type(author);
    cy.get('#genero').select(genre);
    cy.get('#capa').type(cover);

    cy.get('button[type="submit"]').click();

    cy.get('.livro').first().contains(title);
  });
});
