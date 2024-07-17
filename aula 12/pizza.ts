import { Pizza } from "./classe"


enum saborPizza {
    sabor1 = `Mussarela`,
    sabor2 = `Calabresa`,
    sabor3 = `Queijo`
}


const myPizza1 = new Pizza(saborPizza.sabor1, `Grande`, 75)
myPizza1.descricao()
const myPizza2 = new Pizza(saborPizza.sabor2, `Médio`, 45)
myPizza2.descricao()
const myPizza3 = new Pizza(saborPizza.sabor3, `Pequeno`, 25)
myPizza3.descricao()
