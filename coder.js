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
    let red = 150 + Math.round(Math.random()*100);
    let green = 150 + Math.round(Math.random()*100);
    let blue = 150 + Math.round(Math.random()*100);
    return `rgb(${red},${green},${blue})`
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
