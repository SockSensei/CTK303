const ball = document.getElementById("ball");
const pikachu = document.getElementById("pikachu");

let isThrown = false;

document.addEventListener("mousemove", (event) => {
    if (!isThrown) {
        ball.style.transform = `translate(${event.clientX * 0.02}px, ${event.clientY * 0.02}px)`;
    }
});


ball.addEventListener("click", function() {
    if (isThrown) return;
    isThrown = true;

    let randomSpeed = (Math.random() * 2 + 2).toFixed(1);

    ball.style.animation = `throwBall ${randomSpeed}s forwards`;

    setTimeout(() => {
        pikachu.style.animation = "shake 0.5s ease-in-out, disappear 1s forwards";
    }, randomSpeed * 500);
});