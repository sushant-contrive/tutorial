const menu = document.querySelector(".menu");
if (menu) {
  menu.addEventListener("click", () => {
    const isExpanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", String(!isExpanded));
  });
}
