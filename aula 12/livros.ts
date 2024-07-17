// definindo um objeto com objetos da ficcçao seus
let ficcao = {
    'Fundação': 'Isac Asimov',
    'Duna': 'Frank hebert'
 };
// iterando sobre os livroz de ficcção e exibindo os autores
 for (let livro in ficcao) {
    console.log(`Autor do Livro '${livro}': ${ficcao[livro]} `)
    
 }
 let meuObjeto:Object = {
    Nome1 : 'Valor1',
    Nome2 : 'Valor2',
    Nome3 : 'Valor3',
    Nome4 : 'Valor4',
    Nome5 : 'Valor5'
 }

 // para cada elemento em meuObjeto
 for(let elemento in meuObjeto){
    console.log(`O elemento  ${elemento} tem valor ${meuObjeto[elemento]}`)
 }

 // Array representando mos titulos dos livros da prateleira
 let meusLivros = ["Fundação", "Duna", "Orgulho  e  Preconceito"];

 // iterando sobre os  titulos dos livros e exibindo-os

 for (let livro of meusLivros){
    console.log(livro);
 }

 let tolkientlivros = ['Senhor do Aneis', 'O habbit', 'Contos inacabados'
 ]

 tolkientlivros.forEach(livro =>{
    console.log(`Eu já li ${livro}`)
 })

 
 tolkientlivros.forEach(function(livro){
    console.log(`Eu já li ${livro}`);
 })