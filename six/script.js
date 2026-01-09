
function thai() {
    var a = Number(document.getElementById("ppp").value)
    let b = document.getElementById("zxc3")
    switch (a) {
        case 1: b.innerHTML = '<p style="color: yellow;">ПОНЕДЕЛЬНИК</p>'; break;
        case 2: b.innerHTML = '<p style="color: pink;">ВТОРНИК</p>'; break;
        case 3: b.innerHTML = '<p style="color: green;">СРЕДА</p>'; break;
        case 4: b.innerHTML = '<p style="color: orange;">ЧЕТВЕРГ</p>'; break;
        case 5: b.innerHTML = '<p style="color: blue;">ПЯТНИЦА</p>'; break;
        case 6: b.innerHTML = '<p style="color: darkViolet;">СУББОТА</p>'; break;
        case 7: b.innerHTML = '<p style="color: red;">ВОСКРЕСЕНЬЕ</p>'; break;
        default: b.innerHTML = '<p style="color: black;">ОШИБКА</p>'; break;
    }
}

function zxcv() {
    var n = Number(document.getElementById("n").value)
    var min = Number(document.getElementById("min").value)
    var max = Number(document.getElementById("max").value)
    let div = document.getElementById("zxc1")
    let array_numbers = ["Данные отсутствуют"]
    
    if (!isNaN(n) && !isNaN(min) && !isNaN(max)) {
        for (let i = 0; i < n; i++) {
            array_numbers[i] = Math.floor(Math.random() * (max - min) + min)
        }
        const sorted_array = [...array_numbers].sort((a, b) => a - b);

        let tableHTML = '<table border="1" cellpadding="8">';
        tableHTML += '<tr><td><b>Исходный</b></td>';
        array_numbers.forEach(number => {
            tableHTML += `<td>${number}</td>`;
        });
        tableHTML += '</tr>';

        tableHTML += '<tr><td><b>Сортировка</b></td>';
        sorted_array.forEach(number => {
            tableHTML += `<td>${number}</td>`;
        });
        tableHTML += '</tr>';
        tableHTML += '</table>';
        zxc1.innerHTML = tableHTML;
    }
    else {
        div.innerHTML = '<table>' + array_numbers + '</table>';
    }
}