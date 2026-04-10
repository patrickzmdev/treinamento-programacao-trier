import { Animal } from "../classes/Animal";

export class Gato extends Animal {
    fazerSom(): void {
        console.log(`${this.nome} diz: Miau!`);
    }
    
}