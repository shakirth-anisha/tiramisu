var menu = document.getElementById("menu_icon");
menu.addEventListener("click", function () {
    if (window.innerWidth < 900) {
        if (menu.className === "closed") {
            menu.className = "open";

            window.onscroll = function () {
                window.scrollTo(0, 0);
            };

            menu.innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';

            var links = document.getElementById("links");
            var container = document.getElementById("container")

            links.style.zIndex = "100";
            links.style.opacity = "1";
            links.style.display = "flex";
        } else {
            window.onscroll = function () {
                window.scrollTo(window.scrollX, window.scrollY);
            };
            menu.className = "closed";
            menu.innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';

            var links = document.getElementById("links");

            links.style.zIndex = "-1";
            links.style.opacity = "0";
            links.style.display = "flex";
        }
    }
});

window.addEventListener("resize", function () {
    var links = document.getElementById("links");
    var menu_icon = document.getElementById("menu_icon");
    if (window.innerWidth > 900) {
        window.onscroll = function () {
            window.scrollTo(window.scrollX, window.scrollY);
        };
        links.style.opacity = "1";
        menu.className = "closed";
        menu.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';
    } else {
        if (menu.className === "closed") {
            links.style.opacity = "0";
        }
    }
});
