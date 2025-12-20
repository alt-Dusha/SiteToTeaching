
function DateShowing(){
    let day = document.getElementById("day").value;
    let monthNumber = document.getElementById("month").value;
    let weekdayNumber = document.getElementById("dayWeek").value;

    const month = [
        "Января", "Февраля",
        "Марта", "Апреля", "Мая",
        "Июня", "Июля", "Августа",
        "Сентября", "Октября", "Ноября",
        "Декабря"];

    const array1 = [0, 2, 4, 6, 7, 9, 11];
    const array2 = [3, 5, 8, 10];

    const weekday = [
        "Понедельник", "Вторник", "Среда", "Четверг", 
        "Пятница", "Суббота", "Воскресенье"];
    if (day == "" || monthNumber == "" || weekdayNumber == "") {
        alert("Введите все значения");
    } else if (day < 0  || monthNumber < 0 || weekdayNumber < 0) {
        alert("Значения не могут быть отрицательными!");
    } else if (monthNumber > 12) {
        alert("Месяцев всего 12! Введите корректное значение.");
    } else if (!((day <= 30 && array2.indexOf(monthNumber-1) != -1) ||
            (day <= 31 && array1.indexOf(monthNumber-1) != -1) ||
            (monthNumber == 2 && day <= 29))) {
        alert("Количество дней больше, чем может быть в указанном месяце");
    } else if (weekday > 7) {
        alert("Количество дней больше, чем может быть в неделе");
    } else {
        document.getElementById("answerFirst").textContent
            = "Сегодня " + day + " " + month[monthNumber-1] + "-" 
            + weekday[weekdayNumber-1];
    }
}

function arifmatics(){
    let integer = String(document.getElementById("sum").value);
    if (integer == "") {
        alert("Введено пустое значение");
    } else if (isNaN(integer)) {
        alert("Введено не число")
    } else if (integer.length != 5) {
        alert("Данное значение не равно нужной длинне");
        document.getElementById("sum") = 0;
    } else {
        document.getElementById("answerSecond").textContent
        = "Сумма цифр числа: " + 
        (Number(integer[0])+Number(integer[1])
        +Number(integer[2])+Number(integer[3])
        +Number(integer[4])) + ".Произведение цифр числа: " +
        (Number(integer[0])*Number(integer[1])
        *Number(integer[2])*Number(integer[3])
        *Number(integer[4]));
    }
}

function randomizing(){
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    if (isNaN(min) || isNaN(max)){
        alert("Введено не числовое значение в диапазон");
    } else if (document.getElementById("min").value == "" ||
        document.getElementById("max").value == "") {
        alert("Введено пустое значение");
    } else if (max < min) {
        alert("Диапазон выставлен не верно");
    } else {
        document.getElementById("answerThird").textContent
            = (Math.floor(Math.random() * (max - min + 1)) + min);
    }
}