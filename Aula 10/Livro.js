"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(tipo, preco, nome, peso) {
        this.tipo = tipo;
        this.preco = preco;
        this.nome = nome;
        this.peso = peso;
    }
    Livro.prototype.calcularValorTotal = function () {
        return this.preco * 1.2;
    };
    Livro.prototype.abrir = function () {
        console.log("Abrindo o livro ".concat(this.nome, "..."));
    };
    return Livro;
}());
exports.Livro = Livro;
