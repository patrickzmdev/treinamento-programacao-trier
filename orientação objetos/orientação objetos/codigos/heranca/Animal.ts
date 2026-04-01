export class Animal {
    protected nome: string;
    protected idade: number;
    protected som: string;

    constructor(nome: string, idade: number, som: string) {
        this.nome = nome;
        this.idade = idade;
        this.som = som;
    }

    fazerSom(): void {
        console.log(`${this.nome} faz: ${this.som}`);
    }

    envelhecer(): void {
        this.idade++;
        console.log(`${this.nome} envelheceu! Agora tem ${this.idade} anos`);
    }

}
