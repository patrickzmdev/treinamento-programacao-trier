import { Cachorro } from "../classes/Cachorro";
import { Gato } from "../classes/Gato";

const dog = new Cachorro("Rex", 3);
const cat = new Gato("Mimi", 2);

console.log("Resultado para o Cachorro:");
dog.buscar();

console.log("Resultado para o Gato:");
cat.arranhar();

// Demonstrando a herança, onde ambos os animais envelhecem usando o método herdado da classe pai (Animal).
console.log("Herança em ação:");
dog.envelhecer();
cat.envelhecer();

// Demonstrando o método fazerSom, que também é herdado da classe pai (Animal).
dog.fazerSom(); // Rex faz: Au au!
cat.fazerSom(); // Mimi faz: Miau!
