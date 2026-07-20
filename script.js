// =========================================================
// script.js … ページに「動き」をつけるファイル
// JavaScript(ジャバスクリプト)は「〜したら〜する」という動作を書く言葉です。
//
// このファイルは Phase 3 で少しずつ書いていきます。
// 今はまだ空っぽです。まずは骨組み(HTML)と見た目(CSS)を完成させましょう。
// =========================================================

// 下のコメントを外す(先頭の // を消す)と、動くか試せます:
// console.log("script.js が読み込まれました");
// ↑ console.log は「開発者ツールのConsoleに文字を出す」命令。動作確認によく使います。
const startButton = document.querySelector(".btn-start");
const stopButton = document.querySelector(".btn-stop");
const resetButton = document.querySelector(".btn-reset");
const timeDisplay = document.querySelector(".display");
const statusText = document.querySelector(".status");

let timeLeft = 25 * 60;
let timerId = null;
let isWorking = true;

// 残り秒数を「分:秒」にして画面に表示する“関数
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");

    timeDisplay.textContent = m + ":" + s;
}

function switchMode(){
    if(isWorking == true){
        isWorking = false;
        timeLeft = 5 * 60;
        statusText.textContent = "休憩中";
        document.body.style.backgroundColor = "#4f9d69";
    }else{
        isWorking = true;
        timeLeft = 25 * 60;
        statusText.textContent = "作業中"
        document.body.style.backgroundColor = "#d94f4f";
    }
        
}

startButton.addEventListener("click", function () {

    if (timerId !== null) {
        return;
    }
    timerId = setInterval(function () {
        timeLeft = timeLeft - 1;
        if(timeLeft < 0){
            switchMode();
        }

        updateDisplay();
    }, 1000);
});

stopButton.addEventListener("click", function() {
    clearInterval(timerId);
    timerId = null;
});

resetButton.addEventListener("click", function() {
    clearInterval(timerId);
    timerId = null;
    isWorking = true;
    timeLeft = 25 * 60;
    statusText.textContent = "作業中";
    document.body.style.backgroundColor = "#d94f4f";
    updateDisplay();
});