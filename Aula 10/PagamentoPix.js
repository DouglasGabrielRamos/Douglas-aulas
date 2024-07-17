"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoPix = void 0;
var PagamentoPix = /** @class */ (function () {
    function PagamentoPix() {
    }
    PagamentoPix.prototype.pagar = function (valor) {
        return "Pagamento de R$".concat(valor.toFixed(2), " realizado com Pix.");
    };
    return PagamentoPix;
}());
exports.PagamentoPix = PagamentoPix;
