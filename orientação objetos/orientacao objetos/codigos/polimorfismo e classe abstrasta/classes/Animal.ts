export abstract class Animal {
    protected nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    abstract fazerSom(): void;
}