/// <reference types="Cypress" />

const email = 'teste@email.com';
const password = '123123';

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('não consegue logar sem senha ou email', () => {
    cy.get('#email').type(email);

    cy.get('button[type="submit"]').click();

    cy.contains('Por favor, insira uma senha.');

    cy.url().should('not.include', '/livros');
  });

  it('logar com senha e email', () => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/livros');
  });
});
