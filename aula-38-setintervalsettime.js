/* setInterval
   setTimeOut */

/*function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaDoInterval() {
console.log(mostraHora());
}

setInterval(funcaDoInterval, 1000);*/

/* Utilizando função anônima */
/*
function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

setInterval (function() {
console.log(mostraHora());
}, 1000);*/

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval (function() {
console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Hello World!');
}, 5000);




