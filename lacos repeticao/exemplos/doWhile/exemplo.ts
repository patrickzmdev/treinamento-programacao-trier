//exemplo simples de um loop doWhile em TypeScript
// let contador: number = 0;
// do {
//     console.log(`o numero atual é: ${contador}`);
//     contador++;
// } while(contador < 5);

//exemplo parecido com menu interativo
function exibirMenuEscolhido(opcao: number) {
    if (opcao === 1) {
        console.log('Entrou no jogo');
    } else if (opcao === 2) {
        console.log('Opções');
    } else
        console.log('Saindo do menu');
}

let opcao: number = 2;
do {
    console.log('Menu:');
    console.log('1 - Entrou no jogo');
    console.log('2 - Opções');
    console.log('0 - Sair');
    exibirMenuEscolhido(opcao);
    opcao--;
} while (opcao >= 0);