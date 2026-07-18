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
const timeDisplay = document.querySelector(".display")

let timeLeft = 25 * 60;

// 残り秒数を「分:秒」にして画面に表示する“関数
function updateDisplay(){
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");

    timeDisplay.textContent = m + ":" + s;
}

startButton.addEventListener("click", function(){
    setInterval(function(){
        timeLeft = timeLeft - 1;
        updateDisplay();
    }, 1000);
});