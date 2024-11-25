
describe('SearchByTitlePage', () => {
   it("Deve carregar a página inicial corretamente", () => {
       cy.visit("/"); // Acessa a URL base (http://localhost:3000)
       cy.contains("Discover"); // Verifica se o texto existe na página
     });

   it("Fazer a busca campo vazio", () => {
       cy.visit("/");
       cy.get('[data-cy="searchbutton"]').click()
       cy.contains("the search bar is empty"); 
   })

   it("Fazer a busca campo valor", () => {
       cy.visit("/");
       cy.get('[data-cy="searchinput"]').type("african")
       cy.get('[data-cy="searchbutton"]').click()
       
   })

})