let count = 0;
let interval = setInterval(() => {
    console.log(`Повідомлення ${count + 1}`);
    count++;
    if (count === 5) {
        clearInterval(interval);
        console.log("Інтервал зупинено.");
    }
}, 1000);

let size = 50;
let position = 50;
let animationInterval = setInterval(() => {
    size += 5;
    position += 10;
    let box = document.getElementById("box");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.left = `${position}px`;

    if (size >= 150) clearInterval(animationInterval);
}, 500);

let score = 0;
document.getElementById("gameButton").addEventListener("click", () => {
    score++;
    document.getElementById("score").textContent = score;
});

let gameTimer = setTimeout(() => {
    document.getElementById("gameButton").disabled = true;
    alert(`Гра закінчена! Твій результат: ${score} очок.`);
}, 10000);

const timeButtonLinkElement = document.querySelector(".time_button");
timeButtonLinkElement.addEventListener("click", () => {
    let seconds = parseInt(document.getElementById("timeInput").value);
    setTimeout(() => {
        alert("Час вийшов!");
    }, seconds * 1000);
})

