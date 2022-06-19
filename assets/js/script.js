const menu = document.querySelector("#menu");
const burger = document.querySelector("#menu-burg"); //itens do menu
const links = document.querySelectorAll("a");

burger.addEventListener("click", () => {
    menu.classList.toggle("open");
});
// Sai do menu quando clica em alguma das opções
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
    });
});
