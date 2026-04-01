//exemplo simples de um loop doWhile em TypeScript
// let contador: number = 0;
// do {
//     console.log(`o numero atual é: ${contador}`);
//     contador++;
// } while(contador < 5);

//exemplo de um loop doWhile com um array
// const frutas: string[] = ['maçã', 'banana', 'laranja', 'uva', 'pera'];
// let indice: number = 0;
// do {
//     console.log(`a fruta atual é: ${frutas[indice]}`);
//     indice++;
// } while(indice < frutas.length);

//exemplo parecido com menu interativo
function exibirMenuEscolhido(opcao: number) {
    if(opcao === 1) {
        console.log('Entrou no jogo');
    } else if(opcao === 2) {
        console.log('Opções');
    } else if(opcao === 0) {
        console.log('Saindo do menu');
    } else {
        console.log('Opção inválida');
    }
}

let opcao: number;
do {
    console.log('Menu:');
    console.log('1 - Entrou no jogo');
    console.log('2 - Opções');
    console.log('0 - Sair');
    opcao = Math.floor(Math.random() * 10); 
    exibirMenuEscolhido(opcao);
} while(opcao !== 0);