function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPerfectSquare(num) {
    return Number.isInteger(Math.sqrt(num));
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    const num = parseInt(box.innerText.trim());

    if (isPrime(num)) {
        box.style.backgroundColor = getRandomColor();
        box.innerHTML += '<br>prime';
    }

    if (isPerfectSquare(num)) {
        box.style.display = 'none';
    }
});
