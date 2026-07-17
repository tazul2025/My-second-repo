window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
        document.getElementById("home").classList.remove("hide");
    }, 2000);
};

const home = document.getElementById("home");
const gift = document.getElementById("gift");
const letter = document.getElementById("letter");
const finalPage = document.getElementById("final");

document.getElementById("startBtn").onclick = function () {
    home.classList.add("hide");
    gift.classList.remove("hide");

    const music = document.getElementById("music");
    if (music) {
        music.play().catch(() => { });
    }
};

document.getElementById("giftBtn").onclick = function () {
    gift.classList.add("hide");
    letter.classList.remove("hide");
};

document.getElementById("nextBtn").onclick = function () {
    letter.classList.add("hide");
    finalPage.classList.remove("hide");
    confetti();
};

function confetti() {
    for (let i = 0; i < 120; i++) {
        let c = document.createElement("div");

        c.innerHTML = ["🎉", "✨", "🎊", "❤️"][Math.floor(Math.random() * 4)];

        c.style.position = "fixed";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-30px";
        c.style.fontSize = (20 + Math.random() * 25) + "px";
        c.style.animation = "fly " + (4 + Math.random() * 4) + "s linear";

        document.body.appendChild(c);

        setTimeout(() => c.remove(), 8000);
    }
}

setInterval(() => {
    let b = document.createElement("div");

    b.className = "balloon";
    b.innerHTML = ["🎈", "🎈", "❤️", "✨"][Math.floor(Math.random() * 4)];

    b.style.left = Math.random() * 100 + "vw";
    b.style.animationDuration = (6 + Math.random() * 5) + "s";

    document.body.appendChild(b);

    setTimeout(() => {
        b.remove();
    }, 10000);

}, 500);
