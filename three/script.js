// Первое задание
function sumAllInLenght(){
    let N = document.getElementById("N").value;
    let M = document.getElementById("M").value;

    let sum = 0;
    if (N == "" || M == "") {
        alert("Введено пустое значение");
    } else if (isNaN(N) || isNaN(M)) {
        alert("Введено не число")
    } else if (N > M) {
        alert("Число N не может быть больше, чем М")
    } else {
        for (let i = N; i <= M; i++){
            if (i % 2 != 0){
                sum += Number(i);
            }
        }
        document.getElementById("answer1").textContent = sum;
    }
}

// Второе задание
let table = document.getElementById("tableOfMultiplication");
let row = true;
for (let i = 1; i <= 10; i++) {
    let tr = document.createElement("tr");
    let k = 0;
    let column = true;
    for (let j = 1; j <= 10; j++) {
        let td = document.createElement("td");
        td.style.border = "1px solid black";
        if (row) {
            td.style.fontWeight = "bold";
            td.style.border = "2px solid black";
        }
        if (column) {
            td.style.fontWeight = "bold"
            td.style.border = "2px solid black";
            column = false;
        }
        td.textContent = i * j;
        td.style.width = "30px";
        td.style.height = "30px";
        td.style.textAlign = "center";
        tr.appendChild(td);
    }
    row = false;
    table.appendChild(tr);
}


// Третье задание
let randomNumber;
let randomNumberTry;

function RandomizingToTry(){
    randomNumber = Math.floor(Math.random()*10);
    randomNumberTry = Math.floor(Math.random()*9+1)
    document.getElementById("randomNum").textContent = randomNumberTry;
}
RandomizingToTry()
function TryToFindNumber(){
    if (randomNumberTry > 0){   
    let trying = document.getElementById("last").value;
    if (trying != 0 || trying != ""){
        if (trying == randomNumber){
            document.getElementById("back").textContent = "Ничего себе, ты отгадал, ПОЗДРАВЛЯЮ!!!";
        } else {
            randomNumberTry--;
        }
    }
    } else {
            RandomizingToTry();
    }
}