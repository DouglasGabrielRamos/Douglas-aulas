"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(Sabor, Tamanho, Preço) {
        this.Sabor = Sabor;
        this.Tamanho = Tamanho;
        this.Preço = Preço;
    }
    Pizza.prototype.descricao = function () {
        console.log("Pizza ".concat(this.Sabor, ", tamanho ").concat(this.Tamanho, " e ").concat(this.Preço));
    };
    return Pizza;
}());
exports.Pizza = Pizza;
