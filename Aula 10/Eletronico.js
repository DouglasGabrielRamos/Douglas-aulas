"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronico = void 0;
var Eletronico = /** @class */ (function () {
    function Eletronico(tipo, preco, nome, peso) {
        this.tipo = tipo;
        this.preco = preco;
        this.nome = nome;
        this.peso = peso;
    }
    Eletronico.prototype.calcularValorTotal = function () {
        return this.preco;
    };
    Eletronico.prototype.ligar = function () {
        console.log("Ligando o ".concat(this.nome, "..."));
    };
    return Eletronico;
}());
exports.Eletronico = Eletronico;
