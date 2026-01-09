document.addEventListener("DOMContentLoaded", drawRainbow);

function drawRainbow() {
    let canvas = document.getElementById('rainbowDash');
    let ctx = canvas.getContext('2d');

    let colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
    let alphas = [1, 0.75, 0.5, 0.25];

    const width = 25;
    const height = 100;
    const step = width;


    let x = 0;

    for (let i = 0; i < colors.length; i++) {
        for (let k = 0; k < alphas.length; k++) {
            ctx.fillStyle = colors[i];
            ctx.globalAlpha = alphas[k];
            
            ctx.fillRect(x, 0, width, height);
            x += step;
        }
        x += 45;    
    }
}

const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = Math.random().toFixed(2);
        
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    function drawRandomCircle() {
        const x = Math.random() * (canvas.width - 100) + 50;
        const y = Math.random() * (canvas.height - 100) + 50;
        const radius = Math.random() * 80 + 20; 
        const color = getRandomColor();
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

drawRainbow()