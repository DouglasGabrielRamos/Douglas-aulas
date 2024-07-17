// definindo um objeto com objetos da ficcçao seus
var ficcao = {
    'Fundação': 'Isac Asimov',
    'Duna': 'Frank hebert'
};
// iterando sobre os livroz de ficcção e exibindo os autores
for (var livro in ficcao) {
    console.log("Autor do Livro '".concat(livro, "': ").concat(ficcao[livro], " "));
}
var meuObjeto = {
    Nome1: 'Valor1',
    Nome2: 'Valor2',
    Nome3: 'Valor3',
    Nome4: 'Valor4',
    Nome5: 'Valor5'
};
// para cada elemento em meuObjeto
for (var elemento in meuObjeto) {
    console.log("O elemento  ".concat(elemento, " tem valor ").concat(meuObjeto[elemento]));
}
// Array representando mos titulos dos livros da prateleira
var meusLivros = ["Fundação", "Duna", "Orgulho  e  Preconceito"];
// iterando sobre os  titulos dos livros e exibindo-os
for (var _i = 0, meusLivros_1 = meusLivros; _i < meusLivros_1.length; _i++) {
    var livro = meusLivros_1[_i];
    console.log(livro);
}
