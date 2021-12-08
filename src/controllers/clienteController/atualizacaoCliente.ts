import Atualizacao from "../atualizacao";
import Input from "../../utils/input";
import Cliente from "../../modelo/cliente";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";

class AtualizacaoCliente extends Atualizacao {
  private clientes: Array<Cliente>;
  private input: Input;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.input = new Input();
  }

  public atualizar(): void {
    console.log("Atualização de Cliente");

    let cpfCliente = this.input.receberNumero(
      "Digite o número do cpf do cliente que deseja atualizar: "
    );

    this.clientes.forEach((cliente) => {
      if (cpfCliente == cliente.getCpf.getValor) {


        console.log("\nDeseja atualizar o nome do cliente? ");
        console.log("1- Sim, Desejo Atualizar");
        console.log("2- Não, Desejo continuar\n");

        let atualizarNome = this.input.receberNumero(
          "Digite o número que corresponde á ação que deseja realizar: "
        );

        if (atualizarNome == 1) {
          let nomeNovo = this.input.receberTexto(
            "Digite o nome novo do cliente: "
          );
          cliente.setNome(nomeNovo);
        } else {
          console.log("Ok");
        }

        console.log("\nDeseja atualizar o nome social do cliente? ");
        console.log("1- Sim, Desejo Atualizar");
        console.log("2- Não, Desejo continuar\n");

        let atualizarNomeSocial = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (atualizarNome == 1) {
          let nomeSocialNovo = this.input.receberTexto(
            "Digite o nome social novo do cliente: "
          );
          cliente.setNomeSocial(nomeSocialNovo);
        } else {
          console.log("Ok");
        }

        console.log("\nDeseja atualizar o gênero do cliente? ");
        console.log("1- Sim, Desejo Atualizar");
        console.log("2- Não, Desejo continuar\n");

        let atualizarGenero = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (atualizarGenero == 1) {
          console.log("\nSelecione uma opção: ");
          console.log(" 1 - Feminino");
          console.log(" 2 - Masculino");          
          let generoNovo = this.input.receberNumero(
            "Digite o número correspondente: "
          );
          cliente.setGenero(generoNovo);
        } else {
          console.log("Ok");
        }

        console.log("\nDeseja adicionar um novo RG do cliente? ");
        console.log("1- Sim, Desejo Adicionar");
        console.log("2- Não, Desejo continuar\n");;

        let novoRg = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (novoRg == 1) {
          let numeroRG = this.input.receberNumero("\nNúmero do RG: ");
          let dataRG = this.input.receberTexto(
            "Data de emissão do RG: "
          );

          let partesDataRG = dataRG.split("/");

          let ano = new Number(partesDataRG[2].valueOf()).valueOf();
          let mes = new Number(partesDataRG[1].valueOf()).valueOf();
          let dia = new Number(partesDataRG[0].valueOf()).valueOf();
          let dataEmissaoRG = new Date(ano, mes, dia);

          let rgs = cliente.getRgs;
          rgs.push(new RG(numeroRG, dataEmissaoRG));

          cliente.setRgs(rgs);
        } else {
          console.log("Ok");
        }


        console.log("\nDeseja remover algum telefone do cliente? ");
        console.log("1- Sim, Desejo Remover");
        console.log("2- Não, Desejo continuar\n");

        let removerTelefone = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (removerTelefone == 1) {
          let dddTelefone = this.input.receberNumero(
            "DDD do telefone que que será removido: "
          );
          let numeroTelefone = this.input.receberNumero(
            "Número do telefone que será removido: "
          );

          let telefonesAtualizado = cliente.getTelefones.filter((telefone) => {
            telefone.getDdd !== dddTelefone &&
              telefone.getNumero !== numeroTelefone;
          });

          cliente.setTelefones(telefonesAtualizado);

          // Remover mais telefones?

          console.log("\nDeseja remover mais algum telefone do cliente? ");
          console.log("1- Sim, Desejo Remover");
        console.log("2- Não, Desejo continuar\n");
          let removerMaisTelefones = this.input.receberNumero(
            "\nDigite o número correspondente à ação desejada: "
          );

          while (removerMaisTelefones == 1) {
            let dddOutroTelefone = this.input.receberNumero(
              "DDD do telefone que que será removido: "
            );
            let numeroOutroTelefone = this.input.receberNumero(
              "Número do telefone que será removido: "
            );

            let telefonesAtualizadoNovamente = cliente.getTelefones.filter(
              (telefone) => {
                telefone.getDdd !== dddOutroTelefone &&
                  telefone.getNumero !== numeroOutroTelefone;
              }
            );

            cliente.setTelefones(telefonesAtualizadoNovamente);

            console.log("\nDeseja remover mais algum telefone do cliente? ");
            console.log("1- Sim, Desejo Remover");
            console.log("2- Não, Desejo continuar\n");
            removerMaisTelefones = this.input.receberNumero(
              "\nDigite o número correspondente à ação desejada: "
            );
          }
        } else {
          console.log("Ok");
        }

        // Adicionar telefones?

        console.log("\nDeseja adicionar algum telefone do cliente? ");
        console.log("1- Sim, Desejo Adicionar");
        console.log("2- Não, Desejo continuar\n");

        let adicionarTelefone = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (adicionarTelefone == 1) {
          let dddTelefoneNovo = this.input.receberNumero(
            "DDD do telefone que que será adicionado: "
          );
          let numeroTelefoneNovo = this.input.receberNumero(
            "Número do telefone que será adicionado: "
          );

          let telefonesAtualizado = cliente.getTelefones;
          telefonesAtualizado.push(
            new Telefone(dddTelefoneNovo, numeroTelefoneNovo)
          );

          cliente.setTelefones(telefonesAtualizado);

          // Adicionar mais telefones?

          console.log("\nDeseja adicionar mais algum telefone do cliente? ");
          console.log("1- Sim, Desejo Adicionar");
          console.log("2- Não, Desejo continuar\n");
          let adicionarMaistelefones = this.input.receberNumero(
            "\nDigite o número correspondente à ação desejada: "
          );

          while (adicionarMaistelefones == 1) {
            let dddOutroTelefoneAdicionado = this.input.receberNumero(
              "DDD do telefone que que será adicionado: "
            );
            let numeroOutroTelefoneAdicionado = this.input.receberNumero(
              "Número do telefone que será adicionado: "
            );

            let telefonesAtualizado = cliente.getTelefones;
            telefonesAtualizado.push(
              new Telefone(
                dddOutroTelefoneAdicionado,
                numeroOutroTelefoneAdicionado
              )
            );

            cliente.setTelefones(telefonesAtualizado);

            console.log("\nDeseja adicionar mais algum telefone do cliente? ");
            console.log("1- Sim, Desejo Adicionar");
            console.log("2- Não, Desejo continuar\n");
            adicionarMaistelefones = this.input.receberNumero(
              "\nDigite o número correspondente à ação desejada: "
            );
          }
        } else {
          console.log("Ok");
        }


        console.log("\nDeseja remover algum produto consumido pelo cliente? ");
        console.log("1- Sim, Desejo Remover");
        console.log("2- Não, Desejo continuar\n");

        let removerProduto = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (removerProduto == 1) {
          let idProdutoRemovido = this.input.receberNumero(
            "Digite o ID do produto que deseja remover: "
          );

          let produtosAtualizados = cliente.getProdutosConsumidos.filter(
            (produto) => {
              produto !== idProdutoRemovido;
            }
          );

          cliente.setProdutosConsumidos(produtosAtualizados);

          // Remover mais produtos?

          console.log(
            "\nDeseja remover mais algum produto consumido pelo cliente? "
          );
          console.log("1- Sim, Desejo Remover");
          console.log("2- Não, Desejo continuar\n");
          let removerMaisProduto = this.input.receberNumero(
            "\nDigite o número correspondente à ação desejada: "
          );

          while (removerMaisProduto == 1) {
            let idOutroProdutoRemovido = this.input.receberNumero(
              "Digite o ID do produto que deseja remover: "
            );

            let produtosAtualizadosNovamente =
              cliente.getProdutosConsumidos.filter((produto) => {
                produto !== idOutroProdutoRemovido;
              });

            cliente.setProdutosConsumidos(produtosAtualizadosNovamente);

            console.log(
              "\nDeseja remover algum produto consumido pelo cliente? "
            );
            console.log("1- Sim, Desejo Remover");
            console.log("2- Não, Desejo continuar\n");

            removerProduto = this.input.receberNumero(
              "Digite o número correspondente à ação desejada: "
            );
          }
        } else {
          console.log("Ok");
        }

        // Adicionar produtos?

        console.log(
          "\nDeseja adicionar algum produto consumido pelo cliente? "
        );
        console.log("1- Sim, Desejo Adicionar");
        console.log("2- Não, Desejo continuar\n");

        let adicionarProduto = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (adicionarProduto == 1) {
          let idProdutoAdicionado = this.input.receberNumero(
            "Digite o ID do produto que deseja adicionar: "
          );

          let produtosNovos = cliente.getProdutosConsumidos;
          produtosNovos.push(idProdutoAdicionado);

          cliente.setProdutosConsumidos(produtosNovos);

          // Adicionar mais produtos?

          console.log(
            "\nDeseja adicionar mais algum produto consumido pelo cliente? "
          );
          console.log("1- Sim, Desejo Adicionar");
          console.log("2- Não, Desejo continuar\n");
          let adicionarMaisProduto = this.input.receberNumero(
            "\nDigite o número correspondente à ação desejada: "
          );

          while (adicionarMaisProduto == 1) {
            let idOutroProdutoAdicionado = this.input.receberNumero(
              "Digite o ID do produto que deseja adicionar: "
            );

            let outrosProdutosAdicionados = cliente.getProdutosConsumidos;
            outrosProdutosAdicionados.push(idOutroProdutoAdicionado);

            cliente.setProdutosConsumidos(outrosProdutosAdicionados);

            console.log(
              "\nDeseja adicionar mais algum produto consumido pelo cliente? "
            );
            console.log("1- Sim, Desejo Adicionar");
            console.log("2- Não, Desejo continuar\n");
            adicionarMaisProduto = this.input.receberNumero(
              "\nDigite o número correspondente à ação desejada: "
            );
          }
        } else {
          console.log("Ok");
        }

        console.log("\nDeseja remover algum serviço consumido pelo cliente? ");
        console.log("1- Sim, Desejo Remover");
        console.log("2- Não, Desejo continuar\n");

        let removerServico = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (removerServico == 1) {
          let idServicoRemovido = this.input.receberNumero(
            "Digite o ID do servico que deseja remover: "
          );

          let servicosAtualizados = cliente.getServicosConsumidos.filter(
            (servico) => {
              servico !== idServicoRemovido;
            }
          );

          cliente.setProdutosConsumidos(servicosAtualizados);

          // Remover mais serviços?

          console.log(
            "\nDeseja remover mais algum serviço consumido pelo cliente? "
          );
          console.log("1- Sim, Desejo Remover");
          console.log("2- Não, Desejo Continuar\n");
          let removerMaisServico = this.input.receberNumero(
            "\nDigite o número correspondente à ação desejada: "
          );

          while (removerMaisServico == 1) {
            let idOutroServicoRemovido = this.input.receberNumero(
              "Digite o ID do serviço que deseja remover: "
            );

            let servicosAtualizadosNovamente =
              cliente.getServicosConsumidos.filter((servico) => {
                servico !== idOutroServicoRemovido;
              });

            cliente.setServicosConsumidos(servicosAtualizadosNovamente);

            console.log(
              "\nDeseja remover algum serviço consumido pelo cliente? "
            );
            console.log("1- Sim, Desejo Remover");
            console.log("2- Não, Desejo continuar\n");

            removerServico = this.input.receberNumero(
              "Digite o número correspondente à ação desejada: "
            );
          }
        } else {
          console.log("Ok");
        }

        // Adicionar serviços?

        console.log(
          "\nDeseja adicionar algum serviço consumido pelo cliente? "
        );
        console.log("1- Sim, Desejo   Adicionar");
        console.log("2- Não, Desejo continuar\n");

        let adicionarServico = this.input.receberNumero(
          "Digite o número correspondente à ação desejada: "
        );

        if (adicionarServico == 1) {
          let idServicoAdicionado = this.input.receberNumero(
            "Digite o ID do serviço que deseja adicionar: "
          );

          let servicoNovos = cliente.getServicosConsumidos;
          servicoNovos.push(idServicoAdicionado);

          cliente.setServicosConsumidos(servicoNovos);

          // Adicionar mais produtos?

          console.log(
            "\nDeseja adicionar mais algum serviço consumido pelo cliente? "
          );
          console.log("1- Sim, Desejo Adicionar");
          console.log("2- Não, Desejo continuar\n");
          let adicionarMaisServico = this.input.receberNumero(
            "\nDigite o número correspondente à ação desejada: "
          );

          while (adicionarMaisServico == 1) {
            let idOutroServicoAdicionado = this.input.receberNumero(
              "Digite o ID do serviço que deseja adicionar: "
            );

            let outrosServicosAdicionados = cliente.getServicosConsumidos;
            outrosServicosAdicionados.push(idOutroServicoAdicionado);

            cliente.setServicosConsumidos(outrosServicosAdicionados);

            console.log(
              "\nDeseja adicionar mais algum serviço consumido pelo cliente? "
            );
            console.log("1- Sim, Desejo Adicionar");
            console.log("2- Não, Desejo continuar\n");
            adicionarMaisServico = this.input.receberNumero(
              "\nDigite o número correspondente à ação desejada: "
            );
          }
        } else {
          console.log("Ok");
        }

        console.log("\n✨ Atualização concluída com Sucesso\n");
      }
    });
    console.log("\n🏠 De volta ao ínicio\n");
  }
}

export default AtualizacaoCliente;
