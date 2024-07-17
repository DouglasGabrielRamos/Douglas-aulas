"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoDinheiro = void 0;
var PagamentoDinheiro = /** @class */ (function () {
    function PagamentoDinheiro() {
    }
    PagamentoDinheiro.prototype.pagar = function (valor) {
        return "Pagamento de R$".concat(valor.toFixed(2), " realizado com Dinheiro.");
    };
    return PagamentoDinheiro;
}());
exports.PagamentoDinheiro = PagamentoDinheiro;
