var menu = document.getElementById("menu_icon");
menu.addEventListener("click", function () {
    if (window.innerWidth < 900) {
        if (menu.className === "closed") {
            menu.className = "open";

            menu.innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';

            var links = document.getElementById("links");

            links.style.zIndex = "100";
            links.style.opacity = "1";
            links.style.display = "flex";
            links.style.backdropFilter = "blur(15px) brightness(0.5)"
            links.style.webkitBackdropFilter = "blur(15px)"
        } else {
            menu.className = "closed";
            menu.innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';

            var links = document.getElementById("links");

            links.style.zIndex = "-1";
            links.style.opacity = "0";
            links.style.display = "flex";
            links.style.backdropFilter = "none"
            links.style.webkitBackdropFilter = "none"
        }
    }
});

window.addEventListener("resize", function () {
    var links = document.getElementById("links");
    var menu_icon = document.getElementById("menu_icon");
    if (window.innerWidth > 900) {
        links.style.opacity = "1";
        links.style.backdropFilter = "blur(15px)"
        links.style.webkitBackdropFilter = "blur(15px)"
        menu.className = "closed";
        menu.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';
    } else {
        if (menu.className === "closed") {
            links.style.opacity = "0";
            links.style.backdropFilter = "blur(15px)"
            links.style.webkitBackdropFilter = "blur(15px)"
        }
    }
});
