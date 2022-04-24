/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page';

const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade Endereços -- Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.login(perfil.usuario, perfil.senha)
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Natan', 'Algreen', 'EBAC', 'Brasil', 'Rua Joaquina', '63', 'Santa Bárbara D\'Oeste', 'São Paulo', '37500000', '11999999999', 'email@dominio.com')

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});