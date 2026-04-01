import { Animal } from "./Animal";

class Cachorro extends Animal {
    fazerSom(): void {
        console.log(`${this.nome} diz: Au Au!`);
    }
}