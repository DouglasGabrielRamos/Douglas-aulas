"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alimento = void 0;
var Alimento = /** @class */ (function () {
    function Alimento(tipo, preco, nome, peso) {
        this.tipo = tipo;
        this.preco = preco;
        this.nome = nome;
        this.peso = peso;
    }
    Alimento.prototype.calcularValorTotal = function () {
        return this.preco * 1.1;
    };
    Alimento.prototype.cozinhar = function () {
        console.log("Cozinhando o ".concat(this.nome, "..."));
    };
    return Alimento;
}());
exports.Alimento = Alimento;
