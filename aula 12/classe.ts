export class Pizza{
    Sabor:string
    Tamanho:string
    Preço:number

    constructor(Sabor:string, Tamanho:string, Preço:number){
        this.Sabor = Sabor
        this.Tamanho = Tamanho
        this.Preço = Preço
    }

    descricao():void{
        console.log(`Pizza ${this.Sabor}, tamanho ${this.Tamanho} e ${this.Preço}`)
    }
}