const { number } = require("assert-plus")
const { get } = require("lodash")

// Seção para captura de dados na página de criação de fakes
it('Visitar Site de Fakes', () => {
    cy.visit('https://www.4devs.com.br/gerador_de_pessoas/')
  })

//Teste de Cópia:

it("Copy Content", () => {
    let contentText
    cy.get('#bt_gerar_pessoa').click()
    setTimeout(() => {
        cy.get();
      }, 300000);
    })

it('Valor de RG', () => {
    cy.get('#rg > :nth-child(1)').then(($rg) => {
        const txt = $rg.text();
    cy.visit('https://www.4devs.com.br/validador_rg')
    cy.get('#txt_rg').click().type(`${ txt }` + '{enter}')
    cy.get('#bt_validar_rg').click()
    })
})