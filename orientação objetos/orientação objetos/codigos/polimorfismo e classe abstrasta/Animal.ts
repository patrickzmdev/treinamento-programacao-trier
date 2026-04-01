export abstract class Animal {
    protected nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    abstract fazerSom(): void;

    dormir(): void {
        console.log(`${this.nome} está dormindo...`);
    }
}