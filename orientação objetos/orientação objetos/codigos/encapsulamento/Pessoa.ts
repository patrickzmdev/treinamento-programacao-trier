export class Pessoa {
    private nome: string;
    private idade: number;
    private readonly cpf: string;

    constructor(nome: string, idade: number, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    getIdade(): number {
        return this.idade;
    }

    getNome(): string {
        return this.nome;
    }
}