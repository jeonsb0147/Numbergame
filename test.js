// html요소
let result = document.querySelector("#result");
let user = document.querySelector("#user");
let playBtn = document.querySelector("#play");
let bg = document.querySelector(".bg");
let title = document.querySelector("h3");

// 1 ~ 100 까지 수
let num = Math.random();
let comNum = Math.floor(num * 20) + 1;
// console.log(comNum);

// input에 입력한 값이 출력됨
function Startgame() {
  let userNum = Number(user.value);

  if (comNum > userNum) {
    result.textContent = "up";

    bg.style.backgroundImage = 'url("img/swing.gif")';
    bg.style.backgroundSize = "cover";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundRepeat = "no-repeat";
  } else if (comNum < userNum) {
    result.textContent = "down";

    bg.style.backgroundImage = 'url("img/swing.gif")';
    bg.style.backgroundSize = "cover";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundRepeat = "no-repeat";
  } else if (comNum == userNum) {
    result.textContent = "homerun";

    bg.style.backgroundImage = 'url("img/hitting_homerun.gif")';
    bg.style.backgroundSize = "cover";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundRepeat = "no-repeat";
  } else {
    result.textContent = "숫자를 잘못 입력하셨습니다";
  }

  title.style.display = "none";
}
playBtn.addEventListener("click", Startgame);
