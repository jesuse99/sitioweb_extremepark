const listMenu = document.querySelector(".list-menu");
const buttonMenu = document.getElementById("button-menu");
buttonMenu.addEventListener('click', function() {
    if (listMenu.classList.contains("hidden")) {
        listMenu.classList.remove("hidden");
    } else {
        listMenu.classList.add("hidden");
    }
});
