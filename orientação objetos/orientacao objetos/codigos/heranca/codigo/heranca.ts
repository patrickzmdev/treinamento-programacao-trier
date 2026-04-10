import { Cachorro } from "../classes/Cachorro";
import { Gato } from "../classes/Gato";

const dog: Cachorro = new Cachorro("Rex", 3);
const cat: Gato = new Gato("Mimi", 2);

console.log("Resultado para o Cachorro:");
dog.fazerSom();
dog.buscar();

console.log("Resultado para o Gato:");
cat.fazerSom();
cat.arranhar();

console.log("Herança em ação:");
dog.envelhecer();
cat.envelhecer();
