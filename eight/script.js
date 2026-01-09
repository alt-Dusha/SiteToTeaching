let img = document.getElementById("picture");
let angle = 0;
let animationId = null;

const startX = 150;
const startY = 120;
const R = 120;

function resetImage() {
    angle = 0;
    img.style.left = startX + "px";
    img.style.top = startY + "px";
    img.style.transform = "scale(1)";
    img.style.opacity = "1";
}

function startAnimation() {
    if (animationId) return;

    let speedInput = document.getElementById("speedControl");

    animationId = setInterval(() => {
        let speed = Number(speedInput.value);
        angle += 0.05 * speed;

        let x = startX + R * Math.cos(angle);
        let y = startY - R * Math.sin(angle);

        img.style.left = x + "px";
        img.style.top = y + "px";

        let scale = Math.max(0, 1 - angle / 6);
        img.style.transform = `scale(${scale})`;
        img.style.opacity = scale;

        if (scale <= 0) {
            stopAnimation();

            setTimeout(() => {
                resetImage();
                startAnimation();
            }, 300);
        }

    }, 30);
}

function stopAnimation() {
    clearInterval(animationId);
    animationId = null;
}
