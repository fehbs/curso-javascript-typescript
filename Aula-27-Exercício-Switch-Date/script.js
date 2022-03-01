/*
const h1 = document.querySelector('.container h1');
const data = new Date();

function getTextWeekDay(weekDay) {
    let textWeekDay;

    switch (weekDay) {
        case 0:
            textWeekDay = 'domingo';
            return textWeekDay;
        case 1:
            textWeekDay = 'segunda-feira';
            return textWeekDay;
        case 2:
            textWeekDay = 'terça-feira';
            return textWeekDay;
        case 3:
            textWeekDay = 'quarta-feira';
            return textWeekDay;
        case 4:
            textWeekDay = 'quinta-feira';
            return textWeekDay;
        case 5:
            textWeekDay = 'sexta-feira';
            return textWeekDay;
        case 6:
            textWeekDay = 'sábado';
            return textWeekDay;
        default:
            textWeekDay = '';
            return textWeekDay;
    }
}

function getMonthName(monthNumber) {
    let monthName;

    switch (monthNumber) {
        case 0:
            monthName = 'janeiro';
            return monthName;
        case 1:
            monthName = 'fevereiro';
            return monthName;
        case 2:
            monthName = 'março';
            return monthName;
        case 3:
            monthName = 'abril';
            return monthName;
        case 4:
            monthName = 'maio';
            return monthName;
        case 5:
            monthName = 'junho';
            return monthName;
        case 6:
            monthName = 'julho';
            return monthName;
        case 7:
            monthName = 'agosto';
            return monthName;
        case 8:
            monthName = 'setembro';
            return monthName;
        case 9:
            monthName = 'outubro';
            return monthName;
        case 10:
            monthName = 'novembro';
            return monthName;
        case 11:
            monthName = 'dezembro';
            return monthName;
        default:
            monthName = '';
            return monthName;

    }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const weekDay = data.getDay();
    const monthNumber = data.getMonth();

    const dayName = getTextWeekDay(weekDay);
    const monthName = getMonthName(monthNumber);

    return (
        `${dayName}, ${data.getDate()} de ${monthName}` +
        ` de ${data.getFullYear()}` +
        ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criaData(data); */

//Por boas práticas de programação, "LEIA SEMPRE A DOCUMENTÇÂO"!!!.//
// Formula Nativa - EX(1) //
/*const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes); */

//EX (2) // 

const h1 = document.querySelector('.container h1');
const data = new Date();

function getTextWeekDay(weekDay) {
    const weekDays = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
        'quinta-feira', 'sexta-feira', 'sábado'];
    return weekDays[weekDay];
}

function getMonthName(monthNumber) {
    const months = ['janeiro', 'fevereiro', 'abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return months[monthNumber];
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const weekDay = data.getDay();
    const monthNumber = data.getMonth();

    const dayName = getTextWeekDay(weekDay);
    const monthName = getMonthName(monthNumber);

    return (
        `${dayName}, ${data.getDate()} de ${monthName}` +
        ` de ${data.getFullYear()}` +
        ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criaData(data);


