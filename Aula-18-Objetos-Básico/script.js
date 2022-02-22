// Objetos - básico//
// [] -> array
// {} -> objeto
// Argumento é o valor que é passado para o Parâmetro
// Quando uma função está dentro de um objeto ela é chamada de método.

//#################################################//
// Ex: 1 
/*
const pessoa1 = {
    nome: 'Darth',
    sobrenome: 'Vader',
    idade: 25 
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
                                                  */
//#################################################//

//#################################################//
// Ex: 2
/*
function criarPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
}

const pessoa1 = criarPessoa('Luke', 'Skywalker', 30);
const pessoa2 = criarPessoa('Darth', 'Vader', 50);
const pessoa3 = criarPessoa('Princesa', 'Leia', 28);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
console.log(pessoa1.sobrenome, pessoa2.sobrenome, pessoa3.sobrenome);
console.log(pessoa1.idade, pessoa2.idade, pessoa3.idade);
                                                   */
//#################################################//

//#################################################//
// Ex: 3
/*
const pessoa1 = {
    nome: 'José',
    sobrenome: 'Dorival',
    idade: 54,

    fala() {
        console.log(`A minha idade atual é ${this.idade} anos.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();

                                                    */
//#################################################//







