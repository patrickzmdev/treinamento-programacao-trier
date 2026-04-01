import { Animal } from "./Animal";

export class Cachorro extends Animal {

    constructor(nome: string, idade: number) {
        super(nome, idade, "Au au!");
    }

    buscar(): void {
        console.log(`${this.nome} está buscando a bolinha!`);
    }

}
