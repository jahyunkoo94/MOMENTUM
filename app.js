const title = document.querySelector(".title");

function handleTitleEnter() {
  title.innerText = "Mouse is here!";
  title.style.color = "blue";
}

function handleTitleLeave() {
  title.innerText = "Mouse is gone!";
  title.style.color = "teal";
}

function handleWindowResize() {
  title.innerText = "you just resize!";
  title.style.color = "tomato";
}

function handleMouseContextMenu() {
  title.innerText = "That was a right click!";
  title.style.color = "purple";
}

title.addEventListener("mouseenter", handleTitleEnter);
title.addEventListener("mouseleave", handleTitleLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", handleMouseContextMenu);
