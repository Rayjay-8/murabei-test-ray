
describe('CriaLivros', () => {
   beforeEach(() => {
       cy.visit('/createbook');
   });


   it('deve enviar o formulário com sucesso e exibir um alerta de sucesso', () => {
      cy.get('input[name="title"]').type('Random Title');

      cy.get('input[name="author"]').type('Random Author');

      cy.get('input[name="author_slug"]').type('random-author');

      cy.get('textarea[name="author_bio"]').type('Random');
      
      cy.get('input[name="authors"]').type('Random');

      cy.get('input[name="publisher"]').type('Random');

      cy.get('textarea[name="synopsis"]').type('Random Random Random');

     cy.get('button[type="submit"]').click();

     // Verifique se a URL mudou para /search
    cy.url().should('include', '/search');

    cy.contains('results founds')
   })

   it('deve exibir erros caso valores não forem preenchidos ', () => {
      cy.get('button[type="submit"]').click();
      cy.contains('Required')

      // deve permanecer na página
      cy.url().should('include', '/createbook');

      // preenche os campos novamente
      cy.get('input[name="title"]').type('Random Title fix');

      cy.get('input[name="author"]').type('Random Author fix');

      cy.get('input[name="author_slug"]').type('random-author-fix');

      cy.get('textarea[name="author_bio"]').type('Random fix');
      
      cy.get('input[name="authors"]').type('Random fix');

      cy.get('input[name="publisher"]').type('Random fix');

      cy.get('textarea[name="synopsis"]').type('Random Random Random fix fixfix');

     cy.get('button[type="submit"]').click();

     // Verifique se a URL mudou para /search
    cy.url().should('include', '/search');

    cy.contains('results founds')

   })

});