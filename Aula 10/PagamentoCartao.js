"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoCartao = void 0;
var PagamentoCartao = /** @class */ (function () {
    function PagamentoCartao() {
    }
    PagamentoCartao.prototype.pagar = function (valor) {
        return "Pagamento de R$".concat(valor.toFixed(2), " realizado com Cart\u00E3o.");
    };
    return PagamentoCartao;
}());
exports.PagamentoCartao = PagamentoCartao;
