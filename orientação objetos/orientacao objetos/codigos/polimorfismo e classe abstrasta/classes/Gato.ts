import { Animal } from "../classes/Animal";

export class Gato extends Animal {
    // o método fazerSom é obrigatório de ser implementado em Gato, pois é um método abstrato definido na classe pai (Animal). 
    // Cada classe filha deve fornecer sua própria implementação desse método, garantindo que cada tipo de animal faça um som específico.
    fazerSom(): void {
        console.log(`${this.nome} diz: Miau!`);
    }
    
}