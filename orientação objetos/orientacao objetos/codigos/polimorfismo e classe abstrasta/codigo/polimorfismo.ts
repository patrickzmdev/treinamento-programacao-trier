import { Cachorro } from "../classes/Cachorro"; 
import { Gato } from "../classes/Gato";
import { Animal } from "../classes/Animal";

// const animal = new Animal("Cão"); // Erro: Não é possível instanciar uma classe abstrata

const animais: Animal[] = [
    new Cachorro("Rex"),
    new Gato("Mimi")
];

animais.forEach(animal => {
    animal.fazerSom();
});