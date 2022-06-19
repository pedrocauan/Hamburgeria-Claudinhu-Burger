const menu = document.querySelector("#menu");
const burger = document.querySelector("#menu-burg"); //itens do menu
const links = document.querySelectorAll("a");
const html = document.querySelector("html"); /*impede q o usuario role a tela quando tiver no menu*/

burger.addEventListener("click", () => {
    menu.classList.toggle("open");
    html.classList.toggle("open");
});
// Sai do menu quando clica em alguma das opções
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
    });
});
