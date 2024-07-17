var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana[DiasDaSemana["Segunda"] = 0] = "Segunda";
    DiasDaSemana[DiasDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
    DiasDaSemana[DiasDaSemana["Quarta"] = 33] = "Quarta";
    DiasDaSemana[DiasDaSemana["Quinta"] = 10] = "Quinta";
    DiasDaSemana[DiasDaSemana["Sexta"] = 10] = "Sexta";
    DiasDaSemana[DiasDaSemana["S\u00E1bado"] = 4] = "S\u00E1bado";
    DiasDaSemana[DiasDaSemana["Domingo"] = 65] = "Domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
console.log(DiasDaSemana.Domingo); //Saida: 
var Direções;
(function (Direções) {
    Direções[Direções["Norte"] = 0] = "Norte";
    Direções[Direções["Sul"] = 1] = "Sul";
    Direções[Direções["Leste"] = 2] = "Leste";
    Direções[Direções["Oeste"] = 3] = "Oeste";
})(Direções || (Direções = {}));
for (var direcao in Direções) {
    console.log(direcao);
}
