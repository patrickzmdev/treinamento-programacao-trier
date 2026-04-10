import { Animal } from "../classes/Animal";

export class Cachorro extends Animal {
    fazerSom(): void {
        console.log(`${this.nome} diz: Au Au!`);
    }
}