let a = document.getElementById("line")
let image = document.getElementById("img")

function butPage() {
    mes = ""
    for (i = 0; i < document.all.length; i++) { 
        mes = mes + i + " tagName= " + document.all[i].tagName + " id="+document.all[i].id + "\n"
    }
    return alert(mes)
}

function butDate() {
    let date = new Date()
    let out = date
    let newYear = new Date((date.getFullYear() + 1), 0, 1)
    let razn = (newYear - date) / (1000 * 60 * 60 * 24)
    let Month = date.getMonth()
    switch (Month) {
        case 0: Month = "Января"; break;
        case 1: Month = "Февраля"; break;
        case 2: Month = "Марта"; break;
        case 3: Month = "Апреля"; break;
        case 4: Month = "Мая"; break;
        case 5: Month = "Июня"; break;
        case 6: Month = "Июля"; break;
        case 7: Month = "Августа"; break;
        case 8: Month = "Сентября"; break;
        case 9: Month = "Октября"; break;
        case 10: Month = "Ноября"; break;
        case 11: Month = "Декабря"; break;
    }
    return alert(date.getDate() + " " + Month + " " + date.getFullYear() + "\n" + Math.floor(razn) + " дней до Нового Года")   
}

function butLine() {
    let randColor1 = Math.floor(Math.random() * 256)
    let randColor2 = Math.floor(Math.random() * 256)
    let randColor3 = Math.floor(Math.random() * 256)
    a.color = `rgb(${randColor1},${randColor2},${randColor3})`
}

function w1(){
    let input = prompt("Введите числа A, B, и STEP через пробел:").split(' ');
    let summa = 0;
    let a = Number(input[0]);
    let b = Number(input[1]);
    let step = Number(input[2]);
    while (a <= b) {
        summa += a;
        a += step;
    }
    alert(summa);
}

function w2(){
    let input = prompt("Введите числа A, B, и операцию через пробел:").split(' ');
    let first = parseInt(input[0])
    let second = parseInt(input[1])
    let operand = input[2]
    let answer;
    
    switch(operand) {
        case "+":
            answer = first + second
            break;
        case "-": 
            answer = first - second
            break;
        case "*":
            answer = first * second
            break;
        case "/": 
            if (second == 0){
                alert("На ноль делить нельзя");
            } else {
                answer = first / second
            } 
            break;
    }
    alert(answer);
}