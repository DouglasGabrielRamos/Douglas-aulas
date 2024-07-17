"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classe_1 = require("./classe");
var saborPizza;
(function (saborPizza) {
    saborPizza["sabor1"] = "Mussarela";
    saborPizza["sabor2"] = "Calabresa";
    saborPizza["sabor3"] = "Queijo";
})(saborPizza || (saborPizza = {}));
var myPizza1 = new classe_1.Pizza(saborPizza.sabor1, "Grande", 75);
myPizza1.descricao();
var myPizza2 = new classe_1.Pizza(saborPizza.sabor2, "M\u00E9dio", 45);
myPizza2.descricao();
var myPizza3 = new classe_1.Pizza(saborPizza.sabor3, "Pequeno", 25);
myPizza3.descricao();
