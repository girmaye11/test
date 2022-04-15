describe('search test ',function(){

    it(' cleaning  materials',function(){
      cy.visit('http://tesfa.addisweb.tech/')
      cy.get('#home_search').click().type('car cleaning  ')
     
    })
   })
   
   