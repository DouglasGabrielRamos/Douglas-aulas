// Faça um contador que vai de 10 até 0 usando for a cada "segundo", ou melhor, á cada literação, o código deve verificar se o valor de I é par ou impar.
// se for par, imprime no console a palavra "TIC, se for impar, imprime a palavra "TAC", quando chegar a zero, imprima no console a palavra "BOOOM!".
for (var i = 10; i < 0; i--) {
    if (1 % 2 === 0) {
        console.log("TIC");
    }
    else {
        console.log("TAC");
    }
}
/*
for (let i:string = "a"; i !== "abababab"; i += "ba"  ) {
}*/
var arr = ['Carro', 'Moto', 'Bicicleta'];
arr.forEach(function (element, index, array) {
    console.log("Elemento ".concat(element, " no indice ").concat(index));
    console.log("Array original", array);
});
