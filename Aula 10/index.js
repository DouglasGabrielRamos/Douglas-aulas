"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importação do Readline
var readlineSync = require("readline-sync");
// Importação das classes de produto
var Alimento_1 = require("./Classes/Alimento");
var Eletronico_1 = require("./Classes/Eletronico");
var Livro_1 = require("./Classes/Livro");
// Importação das classes de métodos de pagamento
var PagamentoCartao_1 = require("./Classes/PagamentoCartao");
var PagamentoDinheiro_1 = require("./Classes/PagamentoDinheiro");
var PagamentoPix_1 = require("./Classes/PagamentoPix");
// Criação de um array de produtos
var produtos = [
    new Livro_1.Livro('Ficção', 50, 'O Senhor dos Anéis', 1.2),
    new Eletronico_1.Eletronico('Smartphone', 2500, 'iPhone', 0.5),
    new Alimento_1.Alimento('Fruta', 5, 'Maçã', 0.2)
];
// Array que vai armazenar os produtos que adicionarmos ao carrinho
var carrinho = [];
var totalCompra = 0;
//Função que seleciona o método de pagamento
function selecionarPagamento() {
    console.log('Selecione o método de pagamento:');
    console.log('1. Cartão');
    console.log('2. Dinheiro');
    console.log('3. Pix');
    var metodo = readlineSync.question('Escolha uma opção de pagamento: ');
    switch (Number(metodo)) {
        case 1:
            return new PagamentoCartao_1.PagamentoCartao();
        case 2:
            return new PagamentoDinheiro_1.PagamentoDinheiro();
        case 3:
            return new PagamentoPix_1.PagamentoPix();
        default:
            console.log('Método de pagamento inválido.');
    }
}
function comprarProduto() {
    console.log('Produtos disponíveis:');
    //Itera sobre todos os produtos dentro do array 'produtos' para mostrá-los
    produtos.forEach(function (produto, index) {
        console.log("".concat(index + 1, ". ").concat(produto.nome, " - ").concat(produto.tipo, " - R$").concat(produto.preco));
    });
    var escolha = readlineSync.question('Escolha um produto para comprar (número): ');
    //O índice começa em zero, ou seja, o produto 1 é o índice 0, o produto 2 é o índice 1, e assim por diante. Por isso,'escolha - 1'.
    var produtoEscolhido = produtos[Number(escolha) - 1];
    //Adiciona o produto escolhido no carrinho e mostra o valor total
    if (produtoEscolhido) {
        //Mostra o nome do produto que escolhi
        console.log("Voc\u00EA escolheu: ".concat(produtoEscolhido.nome));
        //Adiciona o produto que escolhi no array
        carrinho.push(produtoEscolhido);
        //Adiciona o valor do produto escolhido no total da compra, chamando o método calcularValorTotal
        totalCompra += produtoEscolhido.calcularValorTotal();
        //o método toFixed(2) mostra apenas 2 números após a vírgula
        console.log("Valor total atual: R$".concat(totalCompra.toFixed(2)));
    }
    else {
        console.log('Escolha inválida.');
    }
}
function pagarCompra() {
    console.log("Total da compra: R$".concat(totalCompra.toFixed(2)));
    var metodoPagamento = selecionarPagamento();
    if (metodoPagamento) {
        //Chama o método pagar da classe e passa como argumento o total da compra
        console.log(metodoPagamento.pagar(totalCompra));
        //Define o tamanho do array como 0
        carrinho.length = 0;
        //Reseta o total da compra
        totalCompra = 0;
    }
    else {
        console.log('Operação de pagamento cancelada.');
    }
}
//Função que mostra todos os produtos dentro do carrinho
function verCarrinho() {
    console.log('Carrinho de Compras:');
    //Itera sobre o array com os produtos no carrinho, mostrando cada um
    carrinho.forEach(function (produto, index) {
        console.log("".concat(index + 1, ". ").concat(produto.nome, " - R$").concat(produto.calcularValorTotal().toFixed(2)));
    });
    console.log("Total: R$".concat(totalCompra.toFixed(2)));
}
//Função principal, que mostra o menu
function main() {
    var continuar = true;
    while (continuar) {
        console.log('\nMenu:');
        console.log('1. Comprar Produto');
        console.log('2. Ver Carrinho');
        console.log('3. Pagar');
        console.log('4. Sair');
        var opcao = readlineSync.question('Escolha uma opção: ');
        switch (Number(opcao)) {
            case 1:
                comprarProduto();
                break;
            case 2:
                verCarrinho();
                break;
            case 3:
                pagarCompra();
                break;
            case 4:
                continuar = false;
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida.');
                break;
        }
    }
}
main();
