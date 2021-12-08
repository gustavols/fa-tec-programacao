import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";

class ListagemMenorConsumoEmQuantidade extends Listagem {
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
    console.log(
      "\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
    );
    console.log(
      "Listagem de 10 clientes que menos consumiram produtos/serviços em quantidade"
    );
    console.log(
      "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
    );

    let consumoClientesPorQuantidade: any[] = [];

    this.clientes.forEach((cliente) => {
     
      let cpf: number = cliente.getCpf.getValor;

    
      let quantidadeTotalConsumida: number =
        cliente.getProdutosConsumidos.length +
        cliente.getServicosConsumidos.length;

    
      consumoClientesPorQuantidade.push({
        quantidadeTotalConsumida: quantidadeTotalConsumida,
        cpf: cpf,
      });
    });

    let consumoClientesOrdenado: any[] = [];

   
    consumoClientesOrdenado = consumoClientesPorQuantidade.sort((a, b) => {
      return a.quantidadeTotalConsumida > b.quantidadeTotalConsumida
        ? 1
        : b.quantidadeTotalConsumida > a.quantidadeTotalConsumida
        ? -1
        : 0;
    });


    let consumoClientesLimitado: any[] = consumoClientesOrdenado.slice(0, 9);

 
    consumoClientesLimitado.forEach((consumoClientes) => {
      this.clientes.forEach((cliente) => {
        if (consumoClientes.cpf === cliente.getCpf.getValor) {
          console.log(
            "Quantidade total de serviços/produtos consumidos pelo cliente: " +
              consumoClientes.quantidadeTotalConsumida
          );
          console.log("Nome do cliente: " + cliente.nome);
          console.log("Nome do social do cliente: " + cliente.nomeSocial);

          switch (cliente.genero) {
            case 1 :
              console.log("Gênero do cliente: Feminino");
              break;

            case 2 :
              console.log("Gênero do cliente: Masculino");
              break;

            case 3 :
              console.log("Gênero do cliente: Outro/confidencial");
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
                console.log(
                  "      - Nome do produto: " + produtoCadastrado.nome
                );
                console.log(
                  "        Preço do produto: R$" +
                    produtoCadastrado.preco +
                    ",00"
                );
              }
            });
          });

          console.log("Dados do(s) serviço(s) consumidos pelo cliente");
          cliente.getServicosConsumidos.forEach((servicosConsumidos) => {
            this.servicos.forEach((servicosCadastrados) => {
              if (servicosConsumidos == servicosCadastrados.getId) {
                console.log(
                  "      - Nome do serviço: " + servicosCadastrados.nome
                );
                console.log(
                  "        Preço do serviço: R$" +
                    servicosCadastrados.preco +
                    ",00"
                );
              }
            });
          });

          console.log(
            "Data de cadastro do cliente: " + cliente.getDataCadastro + "\n"
          );
        }
      });
    });

    console.log("\n Listagem concluída\n");
    console.log("\n De volta ao ínicio\n");
  }
}

export default ListagemMenorConsumoEmQuantidade;
