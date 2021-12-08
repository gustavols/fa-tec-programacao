import Cadastro from "../cadastro";
import Input from "../../utils/input";
import Produto from "../../modelo/produto";

class CadastroProduto extends Cadastro {
  private produtos: Array<Produto>;
  private input: Input;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
    this.input = new Input();
  }

  public cadastrar(): void {
    console.log("\n- - - - - - - - - - - - - - - - ");
    console.log("Início do cadastro de produto");
    console.log("- - - - - - - - - - - - - - - - \n");

    let nomeProduto = this.input.receberTexto("Nome do produto: ");
    let idProduto = this.input.receberNumero("ID do produto: ");
    let precoProduto = this.input.receberNumero("Preço do produto: ");

    let produto = new Produto(nomeProduto, idProduto, precoProduto);
    this.produtos.push(produto);

    console.log("\n Cadastro concluído\n");
    console.log("\n De volta ao ínicio\n");
  }
}

export default CadastroProduto;
