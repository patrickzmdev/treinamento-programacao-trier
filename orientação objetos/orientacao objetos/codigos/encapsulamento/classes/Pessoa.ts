export class Pessoa {
    private nome: string;
    private idade: number = 0;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.setIdade(idade);
    }

    getNome(): string {
        return this.nome;
    }

    getIdade(): number {
        return this.idade;
    }


    fazerAniversario(): void {
        this.idade++;
    }

    setIdade(idade: number): void {
        this.idade = idade;
    }
}