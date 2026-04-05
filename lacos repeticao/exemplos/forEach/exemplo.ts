//exemplo simples de um loop forEach em TypeScript
// const numeros: number[] = [1, 2, 3, 4, 5];
// numeros.forEach((numero) => {
//     console.log(`o numero atual é: ${numero}`);
// });

//exemplo de um loop forEach com funções
// const numeros3: number[] = [1, 2, 3, 4, 5];
// const numerosMultiplicados: number[] = [];

// numeros3.forEach((numero) => {
//     numerosMultiplicados.push(numero * 2);
// });

// console.log(`numeros multiplicados: ${numerosMultiplicados}`);

//exemplo de um loop forEach com funcão
const numeros2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares: number[] = [];
const numerosImpares: number[] = [];

function validarNumerosPares(numero: number) {
    if(numero % 2 === 0) {
        numerosPares.push(numero);
    } else {
        numerosImpares.push(numero);
    }
} 

numeros2.forEach(validarNumerosPares);

//como funciona o forEach: ele percorre cada elemento do array numeros2 e chama a função validarNumerosPares para cada elemento, passando o numero atual como argumento. A função validarNumerosPares verifica se o numero é par ou impar e adiciona ao array correspondente. No final, os arrays numerosPares e numerosImpares estão preenchidos com os numeros pares e impares respectivamente.
// numeros2.forEach((numero, index) => {
//     console.log(`o numero atual é: ${numero} e o indice é: ${index}`);
//     validarNumerosPares(numero);
// });

console.log(`numeros pares: ${numerosPares}`);
console.log(`numeros impares: ${numerosImpares}`);

