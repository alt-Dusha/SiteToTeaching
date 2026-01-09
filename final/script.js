function ConverterToCNY(){
    const input = Number(prompt("Введите число(в рублях, после оно конвертируется в юани)"));
    if (!isNaN(input)){
        alert((input * 0.077).toFixed(2) + " Chines Yuan");
    } else {
        alert("Ошибка ввода");
    }
}

function SumOfMultiples(){
    const input = prompt("Введите 2 числа через пробел, \nВАЖНО что первое число должно быть меньше второго").split(' ');
    let answer = "";
    let c = 0;
    if (input){
        for (i = input[0]; i <= input[1]; i++){
            if (i % 2 == 0){
                answer += i + "+";
                c += i;
            }
        }
    } else {
        alert("Ошибка ввода");
    }
    alert(answer.slice(0, -1) + "=" + c);
}

function BMI(){
    const input = prompt("Введите свой рост и вес\nВАЖНО что рост и вес измеряются в кг и см, а так же рост надо ввести первым значением").split(' ');
    if (input){
        let BMI =  input[1] / (input[0] ** 2) * 10000;
        let i = "";
        if (BMI <= 18.5){
            i = ". Дефицит массы тела";
        } else if (BMI <= 25.0) {
            i = ". Норма";
        } else if (BMI <= 30.0){
            i = ". Избыточная масса тела";
        } else {
            i = ". Ожирение";
        }
        alert(BMI.toFixed(2) + i)
    } else {
        alert("Ошибка ввода");
    }
}

function WhatIsTheMonth(num){
    switch (num){
        case 1:
            return "Январь";
            break;
        case 2:
            return "Февраль";
            break;
        case 3:
            return "Март";
            break;
        case 4:
            return "Апрель";
            break;
        case 5:
            return "Май";
            break;
        case 6:
            return "Июнь";
            break;
        case 7:
            return "Июль";
            break;
        case 8:
            return "Август";
            break;
        case 9:
            return "Сентябрь";
            break;
        case 10:
            return "Октябрь";
            break;
        case 11:
            return "Ноябрь";
            break;
        case 12:
            return "Декабрь";
            break;
    }
}

function YearAndMonth(){
    const input = Number(prompt("Введите свой рост и вес\nВАЖНО в году всего 12 месяцев"));
    let kvartal;
    try {
        if (input <= 3){
            kvartal = 1;
        } else if (input <= 6){
            kvartal = 2;
        } else if (input <= 9){
            kvartal = 3;
        } else {
            kvartal = 4;
        }
        alert(WhatIsTheMonth(input) + " = " + kvartal + " квартал") 
    } catch {
        alert("Ошибка ввода");
    }
}

function ArithmeticSequenceElements(){
    const input = prompt("Введите через пробел параметры для арифметической прогрессии/n(первое число - стартовое, второе - шаг, третье - количество элементов)").split(' ');
    let answer = ""
    let c = Number(input[0]);
    for (i = 0; i < input[2]; i++){
        answer += c + ", ";
        c += Number(input[1])
    }
    alert(answer.slice(0, -2))
}

// Анонимная функция для обработки кнопки (задание №6)
const $btn = document.getElementById("anonimus");
$btn.onclick = function() {
    const input = prompt("Введите 3 числа через пробел").split(' ');
    alert(((Number(input[0]) + Number(input[1]) + Number(input[2])) / 3).toFixed(2));
}

function FtoC(){
    const input = Number(prompt("Введите температуру в градусах по Фаренгейту"));
    try {
        alert(((input - 32) * (5/9)).toFixed(2));
    } catch {
        alert("Ошибка ввода");
    }
}

function NiceArray(){
    const input = prompt("Введите числа массива через пробел");
    if (!input) {
        alert("Ошибка ввода");
        return;
    }

    const array = input.split(" ");

    if (isNice(array)) {
        alert("Красивый массив");
    } else {
        alert("Не красивый массив");
    }
}

function isNice(array) {
    if (array.length === 0) return false;

    const nums = array.map(Number);

    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];

        if (!nums.includes(x - 1) && !nums.includes(x + 1)) {
            return false;
        }
    }

    return true;
}

function btnDay(){
    const input = prompt("Введите дату в формате ДЕНЬ ПРОБЕЛ МЕСЯЦ ПРОБЕЛ ГОД").split(' ');
    let array = "";
    input.forEach(i => {
        array += i + "/"
    });
    alert(dayOfTheWeek(array));
}

function btnAge(){
    const input = prompt("Введите дату в формате ГОД ПРОБЕЛ МЕСЯЦ ПРОБЕЛ ДЕНЬ").split(' ');
    alert(ageInDays(input[0], input[1], input[2]))
}

function ageInDays(year, month, day) {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    const diffTime = today - birthDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

function dayOfTheWeek(dateStr) {
    const [day, month, year] = dateStr.split("/").map(Number);

    const date = new Date(year, month - 1, day);

    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];

    return days[date.getDay()];
}

function tryToBingo(){
    array = [];
    arrayString = "";
    for (i = 0; i < 10; i++){
        array[i] = getRandomInt(1, 26);
        arrayString += "[" + array[i] + "] "
    }
    alert(bingo(array) + "\n Массив: " + arrayString)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bingo(array) {
    const needed = [2, 9, 14, 7, 15];

    for (let num of needed) {
        if (!array.includes(num)) {
            return "LOSE";
        }
    }

    return "WIN";
}