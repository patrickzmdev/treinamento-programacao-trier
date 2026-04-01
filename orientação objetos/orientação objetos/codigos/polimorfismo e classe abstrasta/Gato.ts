import { Animal } from "./Animal";

class Gato extends Animal {
    fazerSom(): void {
        console.log(`${this.nome} diz: Miau!`);
    }
    
}