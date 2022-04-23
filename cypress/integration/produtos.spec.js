/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            // .eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidadeDoProduto = 10

        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidadeDoProduto)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidadeDoProduto)
        cy.get('.woocommerce-message').should('contain', quantidadeDoProduto + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produtos ao carrinho -- Utilizando Comando Customizado', () => {
        let quantidadeDoProduto = 3
        let nomeDoProduto = 'Argus All-Weather Tank'
        let tamanho = 'L'
        let cor = 'Gray'

        cy.adicionaProdutosAoCarrinho(nomeDoProduto, tamanho, cor, quantidadeDoProduto)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidadeDoProduto)
        cy.get('.woocommerce-message').should('contain', quantidadeDoProduto + ' × “' + nomeDoProduto + '” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produtos ao carrinho -- Utilizando Comando Customizado', () => {
        let quantidadeDoProduto = 10
        let nomeDoProduto = 'Arcadio Gym Short'
        let tamanho = '34'
        let cor = 'Blue'

        cy.adicionaProdutosAoCarrinho(nomeDoProduto, tamanho, cor, quantidadeDoProduto)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidadeDoProduto)
        cy.get('.woocommerce-message').should('contain', quantidadeDoProduto + ' × “' + nomeDoProduto + '” foram adicionados no seu carrinho.')
    });

    it('Deve excluir o produto do carrinho', () => {
        let quantidadeDoProduto = 10
        let nomeDoProduto = 'Ajax Full-Zip Sweatshirt'

        cy.get('[class="product-block grid"]')
            .contains(nomeDoProduto).click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidadeDoProduto)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidadeDoProduto)
        cy.get('.woocommerce-message').should('contain', quantidadeDoProduto + ' × “' + nomeDoProduto + '” foram adicionados no seu carrinho.')

        cy.get('.woocommerce-message > .button').click()

        cy.get('.page-title').should('contain', 'Carrinho')

        cy.get('.remove > .fa').click()

        cy.get('.woocommerce-message').should('contain', '“' + nomeDoProduto + '” removido')
        cy.get('.cart-empty').should('contain', 'Seu carrinho está vazio.')
    });
});