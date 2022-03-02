const d = new Date();
document.getElementById("dat").innerHTML = d;

// Ex(1) //
/*const real = 'true';

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let name = 'Phil';  // creating
var name2 = 'Dimebag';

if (real) {
    let name = 'Darrell'; // creating
    console.log(name, name2);

    if (real) {
        let name = 'Other thing';
        console.log(name, name2);
    }
} */

// Ex(2) //
/*
const real = true;

let name = 'Dimebag';   // creating
var name2 = 'Dimebag';

var name2 = 'Darrell';  // recreating 
console.log(name, name2);

if (real) {
    let name = 'Phil'; // creating

    if (real) {
        let name = 'Other thing';
    }
}*/

// ex(3) //
/*
var lastname = 'Darrell';

function sayHi () {
    console.log(`Hi ${lastname}!`);
}

sayHi();*/

// Ex(4) //
/*
const real = 'true';

function speakHi() {
    var lastname = 'Myers';

    if (real) {
        console.log(lastname);
    }
}

speakHi(); */

// Ex(5) //

var lastname;
const real = true;

//console.log(lastname);  // undefined
//lastname = 'Darrell'

lastname = 'Darrell';
console.log(lastname);