// Tratando e lançando erros (try, catch,throw) //

/*try {
    console.log(naoExisto);
} catch(err) {
    console.log('naoExisto não existe.');
}*/

/*
function soma(x, y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number'   
    ) {
        throw('x e y precisam ser números.');
    }

    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma('1', 2));
} catch(error) {
    console.log(error);
}*/

function soma(x, y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number'   
    ) {
        throw new ErrorEvent('x e y precisam ser números.'); // lançando erros com funções construtoras de erro 
    }

    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma('1', 2));
} catch(error) {
    //console.log(error);
    console.log('Algo mais amigavel para o usuário');
   
}


