class Product {
    constructor(data) {
        this.id = data.id;
        this.nome = data.nome;
        this.descricao = data.descricao;
        this.preco = data.preco;
        this.quantidadeEstoque = data.quantidadeEstoque;
        this.dataCadastro = data.dataCadastro;
    }

    validar(){
        return !!(this.nome && this.descricao && this.preco && this.quantidadeEstoque);
    }
}