export class Carro {
    private marca: string;
    private modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    exibirInformacoes(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }

    buzinar(): void {
        console.log(`Buzinando...` );
    }

    frear(): void {
        console.log("Freando...");
    }

    acelerar(): void {
        console.log("Acelerando...");
    }
}