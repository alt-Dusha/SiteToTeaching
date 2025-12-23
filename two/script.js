// Тема: Циклы

// Задание: Вычислить сумму всех четных чисел, встречающихся в ряду от M до числа N включительно
let N = 100;
let M = 1;
let sum = 0;
let strings = "";

for (let i = M; i <= N; i++) {
    if (i % 2 === 0) {
        sum += i;
        if (strings === "") strings += i;
        else strings += ", " + i;
    }
}
const answer1 = "Cумма от " + M + " до " + N + ": " + sum + "\nВсе чётные: " + strings;
document.getElementById("answer1").textContent = answer1;
/*
    Задание:
    Даны числа a и b. Выведите строку с числами от а до b (включительно), разделенных пробелами.
    Неизвестно, какое из чисел a или b больше
*/
let a = 16;
let b = 15;
let answer2 = "";

if (a <= b) {
    for (let i = a; i <= b; i++) answer2 += i + " ";
} else {
    for (let i = a; i >= b; i--) answer2 += i + " ";
}
document.getElementById("answer2").textContent = answer2;

// Задание: Вычислить сумму цифр случайного числа в диапазоне от 1000 до 100000
let randomNumber = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
sum = 0;
let str = String(randomNumber);
for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
}
let answer3 = "Рандомное число: " + randomNumber + ". Сумма цифр в числе: " + sum;
document.getElementById("answer3").textContent = answer3;

// Вывести на экран изображение шахматной доски (просто таблица)
let table = document.getElementById("chessTable");
for (let i = 0; i < 8; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < 8; j++) {
        let td = document.createElement("td");
        td.style.width = "30px";
        td.style.height = "30px";
        td.style.border = "1px solid black";

        if ((i + j) % 2 === 1) {
            td.style.backgroundColor = "black";
        }

        tr.appendChild(td);
    }
    table.appendChild(tr);
}