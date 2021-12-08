import Input from "../utils/input";
import Empresa from "../modelo/empresa";

import InsercaoProdutosIniciais from "../utils/insercaoProdutosIniciais";
import InsercaoServicosIniciais from "../utils/insercaoServicosIniciais";
import InsercaoClientesIniciais from "../utils/insercaoClientesIniciais";

import CadastroCliente from "../controllers/clienteController/cadastroCliente";
import CadastroProduto from "../controllers/produtoController/cadastroProduto";
import CadastroServico from "../controllers/servicoConstroller/cadastroServico";

import ListagemProdutos from "../controllers/produtoController/listagemProdutos";
import ListagemServicos from "../controllers/servicoConstroller/listagemServico";
import ListagemClientes from "../controllers/clienteController/listagemCliente";

import AtualizacaoProduto from "../controllers/produtoController/atualizacaoProduto";
import AtualizacaoServico from "../controllers/servicoConstroller/atualizacaoServico";
import AtualizacaoCliente from "../controllers/clienteController/atualizacaoCliente";

import ExclusaoProduto from "../controllers/produtoController/exclusaoProduto";
import ExclusaoServico from "../controllers/servicoConstroller/exclusaoServico";
import ExclusaoCliente from "../controllers/clienteController/exclusaoCliente";

import ListagemConsumoEmQuantidade from "../controllers/listagemController/listagemConsumoEmQuantidade";
import ListagemClientesPorGenero from "../controllers/listagemController/listagemClientesPorGenero";
import ListagemMenorConsumoEmQuantidade from "../controllers/listagemController/listagemMenorConsumoEmQuantidade";
import ListagemConsumoEmValor from "../controllers/listagemController/listagemConsumoEmValor";
import ListagemConsumoProdutos from "../controllers/listagemController/listagemConsumoProdutos";
import ListagemConsumoProdutosPorGenero from "../controllers/listagemController/listagemProdutoConsumoPorGenero";

import exibirMenuCliente from "./menus/menuCliente";
import exibirMenuProduto from "./menus/menuProduto";
import exibirInicio from "./menus/inicio";
import exibirMenuServico from "./menus/menuServico";
import exibirMenuListagens from "./menus/menuListagens";

console.log("Bem Vindo a World Beauty");


let empresa = new Empresa();
let programaEmExecucao = true;


let produtosIniciais = new InsercaoProdutosIniciais(empresa.getProdutos);
produtosIniciais.cadastrar();

let servicosIniciais = new InsercaoServicosIniciais(empresa.getServicos);
servicosIniciais.cadastrar();

let clientesIniciais = new InsercaoClientesIniciais(empresa.getClientes);
clientesIniciais.cadastrar();


while (programaEmExecucao) {

  exibirInicio();
  let input = new Input();
  let menuEscolhido = input.receberNumero(
    "\nDigite o número correspondente à ação desejada: "
  );

  switch (menuEscolhido) {

    case 1:
      exibirMenuCliente();
      let opcaoMenuCliente = input.receberNumero(
        "\nDigite o número correspondente à ação desejada: "
      );

      switch (opcaoMenuCliente) {
        case 1 :
          let cadastroCliente = new CadastroCliente(empresa.getClientes);
          cadastroCliente.cadastrar();
          break;

        case 2 :
          let listagemClientes = new ListagemClientes(
            empresa.getClientes,
            empresa.getProdutos,
            empresa.getServicos
          );
          listagemClientes.listar();
          break;

        case 3 :
          let atualizacaoClientes = new AtualizacaoCliente(empresa.getClientes);
          atualizacaoClientes.atualizar();
          break;

        case 4 :
          let exclusaoClientes = new ExclusaoCliente(empresa);
          exclusaoClientes.excluir();
          break;

        case 0 :
          console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
          console.log("\n De volta ao ínicio \n");
          break;

        default:
          console.log("\n▲ Operação não entendida ▲\n");
      }
      break;

    case 2:
      exibirMenuProduto();
      let opcaoMenuProduto = input.receberNumero(
        "\nDigite o número correspondente à ação desejada: "
      );

      switch (opcaoMenuProduto) {
        case 1 :
          let cadastroProduto = new CadastroProduto(empresa.getProdutos);
          cadastroProduto.cadastrar();
          break;

        case 2 :
          let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
          listagemProdutos.listar();
          break;

        case 3 :
          let atualizacaoProdutos = new AtualizacaoProduto(empresa.getProdutos);
          atualizacaoProdutos.atualizar();
          break;

        case 4 :
          let exclusaoProdutos = new ExclusaoProduto(empresa);
          exclusaoProdutos.excluir();
          break;

        case 0 :
          console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
          console.log("\n De volta ao ínicio \n");
          break;

        default:
          console.log("\n▲ Operação não entendida ▲\n");
      }
      break;

    case 3:
      exibirMenuServico();
      let opcaoMenuServico = input.receberNumero(
        "\nDigite o número correspondente à ação desejada: "
      );

      switch (opcaoMenuServico) {
        case 1 :
          let cadastroServico = new CadastroServico(empresa.getServicos);
          cadastroServico.cadastrar();
          break;

        case 2 :
          let listagemServicos = new ListagemServicos(empresa.getServicos);
          listagemServicos.listar();
          break;

        case 3 :
          let atualizacaoServico = new AtualizacaoServico(empresa.getServicos);
          atualizacaoServico.atualizar();
          break;

        case 4 :
          let exclusaoServicos = new ExclusaoServico(empresa);
          exclusaoServicos.excluir();
          break;

        case 0 :
          console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
          console.log("\n De volta ao ínicio \n");
          break;

        default:
          console.log("\n▲ Operação não entendida ▲\n");
      }
      break;

    case 4:
      exibirMenuListagens();
      let opcaoMenuListagem = input.receberNumero(
        "\nDigite o número correspondente à ação desejada: "
      );

      switch (opcaoMenuListagem) {
        case 1 :
          let listagemConsumoEmQuantidade = new ListagemConsumoEmQuantidade(
            empresa.getClientes,
            empresa.getProdutos,
            empresa.getServicos
          );
          listagemConsumoEmQuantidade.listar();
          break;

        case 2 :
          let listagemClientesPorGenero = new ListagemClientesPorGenero(
            empresa.getClientes,
            empresa.getProdutos,
            empresa.getServicos
          );
          listagemClientesPorGenero.listar();
          break;

        case 3 :
          let listagemConsumoProdutos = new ListagemConsumoProdutos(
            empresa.getClientes,
            empresa.getProdutos,
            empresa.getServicos
          );
          listagemConsumoProdutos.listar();
          break;

        case 4 :
          let listagemConsumoProdutosPorGenero =
            new ListagemConsumoProdutosPorGenero(
              empresa.getClientes,
              empresa.getProdutos,
              empresa.getServicos
            );
          listagemConsumoProdutosPorGenero.listar();
          break;

        case 5 :
          let listagemMenorConsumoEmQuantidade =
            new ListagemMenorConsumoEmQuantidade(
              empresa.getClientes,
              empresa.getProdutos,
              empresa.getServicos
            );
          listagemMenorConsumoEmQuantidade.listar();
          break;

        case 6 :
          let listagemConsumoEmValor = new ListagemConsumoEmValor(
            empresa.getClientes,
            empresa.getProdutos,
            empresa.getServicos
          );
          listagemConsumoEmValor.listar();
          break;

        case 0 :
          console.log("\n- - - - - - - - - - - - - - - - - - - - - - -");
          console.log("\n De volta ao ínicio \n");
          break;

        default:
          console.log("\n▲ Operação não entendida ▲\n");
      }

      break;

    case 0:
      programaEmExecucao = false;
      console.log("\n Finalizando...\n");
      break;

    default:
      console.log("\n▲ Operação não entendida ▲\n");
  }
}
