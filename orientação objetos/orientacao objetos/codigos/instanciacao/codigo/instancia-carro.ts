import { Carro } from "../classe/Carro";

const carro1 = new Carro("Toyota", "Corolla");
const carro2 = new Carro("Honda", "Civic");

// Primeira instância do carro
carro1.buzinar(); 
carro1.frear();
carro1.acelerar();
carro1.exibirInformacoes();

// Segunda instância do carro
carro2.buzinar();
carro2.frear();
carro2.acelerar();
carro2.exibirInformacoes();

//Exemplo de sobrecarga de construtor usando parâmetros opcionais
// const carro3 = new Carro("Ford", "Mustang", 2021);
// carro3.exibirInformacoes();