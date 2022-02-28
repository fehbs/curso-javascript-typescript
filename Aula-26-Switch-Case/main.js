/*const data = new Date('1982-05-23 00:00:00');
const weekDay = data.getDay();
weekDay = 7;
let textWeekDay;

if (weekDay === 0) {
    textWeekDay = 'Sunday';
} else if (weekDay === 1) {
    textWeekDay = 'Monday';
} else if (weekDay === 2) {
    textWeekDay = 'Tuesday';
} else if (weekDay === 3) {
    textWeekDay = 'Wednesday';
} else if (weekDay === 4) {
    textWeekDay = 'Thursday';
} else if (weekDay === 5) {
    textWeekDay = 'Friday';
} else if (weekDay === 6) {
    textWeekDay = 'Saturday';
} else {
    textWeekDay = '';
}

console.log(weekDay, textWeekDay);*/


// Aplicando Switch Case na mesma situação
/*
const data = new Date('1982-05-27 00:00:00');
let weekDay = data.getDay();
//weekDay = 7;
let textWeekDay;

switch (weekDay) {
    case 0:
        textWeekDay = 'Sunday';
        break;
    case 1:
        textWeekDay = 'Monday';
        break;
    case 2:
        textWeekDay = 'Tuesday';
        break;
    case 3:
        textWeekDay = 'Wednesday';
        break;
    case 4:
        textWeekDay = 'Thursday';
        break;
    case 5:
        textWeekDay = 'Friday';
        break;
    case 6:
        textWeekDay = 'Saturday';
        break;
    //default:
        textWeekDay = '';
        break;//
}

console.log(weekDay, textWeekDay); */

// Aplicando Switch - Case com uma Função

function getTextWeekDay(weekDay) {
    let textWeekDay;

    switch (weekDay) {
        case 0:
            textWeekDay = 'Sunday';
            return textWeekDay;
        case 1:
            textWeekDay = 'Monday';
            return textWeekDay;
        case 2:
            textWeekDay = 'Tuesday'
            return textWeekDay;
        case 3:
            textWeekDay = 'Wednesday';
            return textWeekDay;
        case 4:
            textWeekDay = 'Friday';
            return textWeekDay;
        case 5:
            textWeekDay = 'Saturday';
            return textWeekDay;
    }
}

const data = new Date('1982-05-27 00:00:00');
let weekDay = data.getDay();
const textWeekDay = getTextWeekDay(weekDay);

console.log(weekDay, textWeekDay);




