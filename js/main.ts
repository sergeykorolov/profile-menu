
const elemMenu = document.querySelector<HTMLElement>(".menu");
const selectedElem = document.querySelector<HTMLElement>(".selected-element");

function openMenu() {
  elemMenu.classList.add("animation-menu");
  selectedElem.style.display = "block";
}

function hideMenu() {
  elemMenu.classList.remove("animation-menu");
  selectedElem.style.display = "none";
}

document.getElementById("menuButton").addEventListener("click", openMenu);
document.getElementById("hideMenu").addEventListener("click", hideMenu);