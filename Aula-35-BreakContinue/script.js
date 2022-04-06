/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        continue;
    }
    console.log(numero);
}*/


/*const numeros = [1, 2, 3, 4, 5, 6];

for (let numero of numeros) {

    if (numero === 6) {
        continue;
    }
    console.log(numero);
}*/


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }
    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }
}


/*const numeros = [1, 2, 3, 4, 5, 6];

for (let numero of numeros) {

    if (numero === 6 || numero === 1) {
        console.log('Pulei o número 1');
        console.log('Pulei o número 6');
        continue;
    }
    console.log(numero);
}*/
