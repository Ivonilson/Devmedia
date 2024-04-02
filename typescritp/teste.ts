class Produto {
    codigo : string; 
    descricao : string;
    preco : number;

    constructor(_codigo : string, _descricao : string, _preco : number) {
        this.codigo = _codigo,
        this.descricao = _descricao,
        this.preco = _preco
    }

    getDados() {
        return "Prod " + this.codigo + " " + this.descricao + " - R$ " + this.preco;
    }
}