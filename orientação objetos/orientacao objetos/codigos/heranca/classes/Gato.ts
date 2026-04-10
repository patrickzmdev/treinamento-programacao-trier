import { Animal } from "../classes/Animal";

export class Gato extends Animal {

    constructor(nome: string, idade: number) {
        super(nome, idade, "Miau!");
    }

    arranhar(): void {
        console.log(`${this.nome} está arranhando...`);
    }
}
