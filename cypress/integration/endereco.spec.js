/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page';

const perfil = require('../fixtures/perfil.json')
const dadosDeEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços -- Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.login(perfil.usuario, perfil.senha)
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Natan', 'Algreen', 'EBAC', 'Brasil', 'Rua Joaquina', '63', 'Santa Bárbara D\'Oeste', 'São Paulo', '37500000', '11999999999', 'email@dominio.com')

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de faturamento com sucesso -- Utilizando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(dadosDeEndereco[1].nome, dadosDeEndereco[1].sobrenome, dadosDeEndereco[1].empresa, dadosDeEndereco[1].pais, dadosDeEndereco[1].endereco, dadosDeEndereco[1].numero, dadosDeEndereco[1].cidade, dadosDeEndereco[1].estado, dadosDeEndereco[1].cep, dadosDeEndereco[1].telefone, dadosDeEndereco[1].email)

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de entrega com sucesso -- Utilizando arquivo de dados', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosDeEndereco[2].nome,
            dadosDeEndereco[2].sobrenome,
            dadosDeEndereco[2].empresa,
            dadosDeEndereco[2].pais,
            dadosDeEndereco[2].endereco,
            dadosDeEndereco[2].numero,
            dadosDeEndereco[2].cidade,
            dadosDeEndereco[2].estado,
            dadosDeEndereco[2].cep)
        
            cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});