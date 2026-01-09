function hello(){
    let name = prompt("Введите ваше имя");
    
    if (name == ""){
        alert("Привет, гость");
    } else {
        alert("Привет, " + name);
    }
}

function mul(){
    try{
        let back = prompt("Введите 2 числа через пробел").split(' ');
        let num1, num2;
        num1 = Number(back[0]);
        num2 = Number(back[1]);
        alert(num1*num2);
    } catch {
        alert("Ошибка конвертации, введённые значения не в верном формате");
    }
}

function rgb(){  
    try{
        let back = prompt("Введите 3 числа через пробел").split(' ');
        alert(`rgb(${back[0]},${back[1]},${back[2]})`);
    }  catch {
        alert("Ошибка конвертации, введённые значения не в верном формате");
    }
}

function avg(){
    try{
        let back = prompt("Введите любые числа через пробел").split(' ');
        let counter = 0;
        let sum = 0;
        for (let i = 0; i < back.length; i++){
            counter++;
            sum += Number(back[i]);
        }
        alert(`Среднее значение чисел: ${sum/counter}`)

    } catch {
        alert("Ошибка конвертации, введённые значения не в верном формате");
    }
}

function operation(){
    try{
        let back = prompt("Введите любые через пробел 2 числа и действие, которое надо провести над ними").split(' ');
        switch (back[2]){
            case "-":
                alert(Number(back[0]) - Number(back[1]));
                break;
            case "*":
                alert(Number(back[0]) * Number(back[1]));
                break;
            case "+":
                alert(Number(back[0]) + Number(back[1]));
                break;
            case "/":
                if (Number(back[1]) == 0){
                    alert("На ноль делить нельзя");s
                } else {
                    alert(Number(back[0]) - Number(back[1]));
                }
                break;
        }
    } catch {
        alert("Ошибка конвертации, введённые значения не в верном формате");
    }
}

const table = document.getElementById("colorTable");
table.style.borderSpacing = "0px";
const k = 8;
let cellNumber = 0;

function getColorByRemainder(remainder) {
    switch (remainder) {
        case 0: return "#FFFFFF"; // белый
        case 1: return "lightblue"; // голубой
        case 2: return "#0000FF"; // синий
        case 3: return "yellow"; // желтый
        case 4: return "violet"; // фиолетовый
        case 5: return "red"; // красный
        case 6: return "lemonchiffon"; // лимонный
        case 7: return "cyan"; // бирюзовый
        case 8: return "lightgray"; // светло-серый
    }
}

let s = true;
for (let i = 0; i < 30; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < 30; j++) {
        const td = document.createElement("td");
        cellNumber++;
        let remainder = cellNumber % k;
        td.style.padding = "0px";
        td.style.width = "10px";
        td.style.height = "10px";
        td.style.backgroundColor = getColorByRemainder(remainder);
        td.style.border = "1px solid black"
        tr.appendChild(td);
    }

    table.appendChild(tr);
}
