let currentIndex = 0;
const images = document.querySelectorAll("#slider img");

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
        img.classList.toggle("hidden", i !== index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);
