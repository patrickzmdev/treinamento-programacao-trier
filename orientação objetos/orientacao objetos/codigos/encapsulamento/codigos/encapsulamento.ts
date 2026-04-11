import { Pessoa } from "../classes/Pessoa";

const pessoa1 = new Pessoa("João", 30);

console.log(`Nome: ${pessoa1.getNome()} possui ${pessoa1.getIdade()} anos.`);

pessoa1.fazerAniversario(); // João fez aniversário! Agora tem 31 anos.

console.log(`Nome: ${pessoa1.getNome()} possui ${pessoa1.getIdade()} anos.`);

//Não é possível acessar diretamente os atributos privados, pois eles estão encapsulados dentro da classe Pessoa.
//pessoa1.idade = 40; // Erro: Atributo 'idade' é privado e só pode ser acessado dentro da classe 'Pessoa'.
