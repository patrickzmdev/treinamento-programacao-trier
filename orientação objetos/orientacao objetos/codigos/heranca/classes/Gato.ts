import { Animal } from "../classes/Animal";

export class Gato extends Animal {

    //o super é utilizado para chamar o construtor da classe pai (Animal) e passar os parâmetros necessários para inicializar os atributos herdados.
    constructor(nome: string, idade: number) {
        super(nome, idade, "Miau!");
    }

    arranhar(): void {
        console.log(`${this.nome} está arranhando...`);
    }
}
