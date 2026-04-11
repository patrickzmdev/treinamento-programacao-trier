export class Carro {
    private marca: string;
    private modelo: string;
    private ano?: number;


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

    // O Typescript permite a sobrecarga de construtores, mas apenas uma implementação é permitida.
    // Para contornar isso, podemos usar parâmetros opcionais ou criar métodos estáticos para instanciar objetos de diferentes maneiras.
    // constructor(marca: string, modelo: string);
    // constructor(marca: string, modelo: string, ano: number);
    // constructor(marca: string, modelo: string, ano?: number) {
    //     this.marca = marca;
    //     this.modelo = modelo;
    //     this.ano = ano || 2020;
    // }

    // exibirInformacoes(): void {
    //     console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    // }
}