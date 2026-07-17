window.onload = function () {

    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
        document.getElementById("home").classList.remove("hide");
    }, 2000);

    const home = document.getElementById("home");
    const gift = document.getElementById("gift");
    const letter = document.getElementById("letter");
    const finalPage = document.getElementById("final");

    document.getElementById("startBtn").onclick = function () {
        home.classList.add("hide");
        gift.classList.remove("hide");
    };

    document.getElementById("giftBtn").onclick = function () {
        gift.classList.add("hide");
        letter.classList.remove("hide");
    };

    document.getElementById("nextBtn").onclick = function () {
        letter.classList.add("hide");
        finalPage.classList.remove("hide");
    };

    const music = document.getElementById("music");

    if (music) {
        document.body.addEventListener("click", function () {
            music.play().catch(() => {});
        }, { once: true });
    }
};
