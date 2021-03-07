"use strict";
// ボタンとナビゲーションを取得
const nav = document.querySelector(".o-global-nav");
const btn = document.querySelector(".o-global-nav-btn");

//ボタンクリックで開閉
btn.addEventListener("click", () => {
  nav.classList.toggle("open");
  btn.classList.toggle("open");
});
