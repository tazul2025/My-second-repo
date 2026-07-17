window.onload = function () {

setTimeout(function () {
document.getElementById("loader").classList.add("hide");
document.getElementById("home").classList.remove("hide");
},2000);

};

const home=document.getElementById("home");
const gift=document.getElementById("gift");
const letter=document.getElementById("letter");
const final=document.getElementById("final");

const music=document.getElementById("music");

document.getElementById("startBtn").onclick=function(){

home.classList.add("hide");
gift.classList.remove("hide");

music.play().catch(()=>{});

};

document.getElementById("giftBtn").onclick=function(){

gift.classList.add("hide");
letter.classList.remove("hide");

};

document.getElementById("nextBtn").onclick=function(){

letter.classList.add("hide");
final.classList.remove("hide");

};

setInterval(function(){

let b=document.createElement("div");

b.className="balloon";

b.innerHTML=["🎈","🎉","❤️","✨","🎂"][Math.floor(Math.random()*5)];

b.style.left=Math.random()*100+"vw";

b.style.animationDuration=(5+Math.random()*4)+"s";

document.body.appendChild(b);

setTimeout(function(){

b.remove();

},9000);

},500);
