let footer = document.querySelector("footer");
let main = document.querySelector(".main");
let footerHeight = footer.getBoundingClientRect().height;
main.style.height = "calc(100vh - " + footerHeight + "px)";