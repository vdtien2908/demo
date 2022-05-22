const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItem = $$(".tab-item");
const tabPane = $$(".tab-pane");

const tabItemActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabItemActive.offsetLeft + "px";
line.style.width = tabItemActive.offsetWidth + "px";

tabItem.forEach(function (tabItem, index) {
  const Pane = tabPane[index];
  tabItem.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    Pane.classList.add("active");
  };
});
