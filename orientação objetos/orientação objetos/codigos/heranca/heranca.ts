import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";

const dog = new Cachorro("Rex", 3);
const cat = new Gato("Mimi", 2);

console.log("=== CACHORRO ===");
dog.fazerSom();
dog.buscar();

console.log("\n=== GATO ===");
cat.fazerSom();
cat.arranhar();

console.log("\n=== HERANÇA EM AÇÃO ===");
dog.envelhecer();
cat.envelhecer();
