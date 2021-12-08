import Servico from "../modelo/servico";
import Cadastro from "../controllers/cadastro";

class InsercaoServicosIniciais extends Cadastro {
  private servicos: Array<Servico>;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
  }

  public cadastrar(): void {
  
    this.servicos.push(new Servico("Serviços de Unha de Mão", 1, 15));


    this.servicos.push(new Servico("Serviços de Unha de Pé", 2, 15));

  
    this.servicos.push(new Servico("Design de sombrancelhas", 3, 20));


    this.servicos.push(new Servico("Corte de cabelo", 4, 50));

    this.servicos.push(
      new Servico("Tratamento para redução de medidas", 10, 1000)
    );

    this.servicos.push(new Servico("Modelagem e corte de barba", 11, 20));

    
    this.servicos.push(new Servico("Tratamento de queda de cabelo", 12, 100));
  }
}

export default InsercaoServicosIniciais;
