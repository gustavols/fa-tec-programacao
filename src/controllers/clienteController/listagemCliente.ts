import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

class ListagemClientes extends Listagem {
  private clientes: Array<Cliente>;
  private produtos: Array<Produto>;
  private servicos: Array<Servico>;

  constructor(
    clientes: Array<Cliente>,
    produtos: Array<Produto>,
    servicos: Array<Servico>
  ) {
    super();
    this.clientes = clientes;
    this.produtos = produtos;
    this.servicos = servicos;
  }

  public listar(): void {
    console.log("\n- - - - - - - - - - - - - - - - - - - - - -");
    console.log("Lista das informações de todos os clientes");
    console.log("- - - - - - - - - - - - - - - - - - - - - -\n");

    this.clientes.forEach((cliente) => {
      console.log("Nome do cliente: " + cliente.nome);
      console.log("Nome do social do cliente: " + cliente.nomeSocial);

      switch (cliente.genero) {
        case 1: 
          console.log("Gênero do cliente: Feminino");
          break;

        case 2:
          console.log("Gênero do cliente: Masculino");
          break;
      }

      console.log("Dados do CPF do cliente");
      console.log("      - Número do CPF: " + cliente.getCpf.getValor);
      console.log(
        "        Data de emissão do CPF: " + cliente.getCpf.getDataEmissao
      );

      console.log("Dados do(s) RG(s) do cliente");
      cliente.getRgs.forEach((RG) => {
        console.log("      - Número do RG: " + RG.getValor);
        console.log("        Data de emissão do RG: " + RG.getDataEmissao);
      });

      console.log("Dados do(s) telefone(s) do cliente");
      cliente.getTelefones.forEach((telefone) => {
        console.log("      - DDD do telefone: " + telefone.getDdd);
        console.log("        Número do telefone: " + telefone.getNumero);
      });

      console.log("Dados do(s) produto(s) consumidos pelo cliente");
      cliente.getProdutosConsumidos.forEach((produtoConsumido) => {
        this.produtos.forEach((produtoCadastrado) => {
          if (produtoConsumido == produtoCadastrado.getId) {
            console.log("      - Nome do produto: " + produtoCadastrado.nome);
            console.log(
              "        Preço do produto: R$" + produtoCadastrado.preco + ",00"
            );
          }
        });
      });

      console.log("Dados do(s) serviço(s) consumidos pelo cliente");
      cliente.getServicosConsumidos.forEach((servicosConsumidos) => {
        this.servicos.forEach((servicosCadastrados) => {
          if (servicosConsumidos == servicosCadastrados.getId) {
            console.log("      - Nome do serviço: " + servicosCadastrados.nome);
            console.log(
              "        Preço do serviço: R$" + servicosCadastrados.preco + ",00"
            );
          }
        });
      });

      console.log(
        "Data de cadastro do cliente: " + cliente.getDataCadastro + "\n"
      );
    });

    console.log("\n Listagem concluída\n");
    console.log("\n De volta ao ínicio\n");
  }
}

export default ListagemClientes;
