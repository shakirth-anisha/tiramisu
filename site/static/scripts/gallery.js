document.addEventListener("DOMContentLoaded", function () {
    var url = "/static/images/gallery/gallery.json";

    var container = document.getElementById("gallery");

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            for (member in data) {
                var img_grid = document.createElement("div");
                var details = document.createElement("details");
                var summary = document.createElement("summary");
                summary.innerHTML = `${member}`;
                img_grid.className = "img-grid";
                for (link_index in data[member]) {
                    // img_grid.innerHTML += `<figure><img loading="lazy" src="${data[member][link_index]}"></figure>`;
                    var img = document.createElement("img");
                    img.src = data[member][link_index];
                    img.loading = "lazy";
                    var figure = document.createElement("figure");
                    figure.appendChild(img);
                    img_grid.appendChild(figure);
                }
                details.appendChild(summary);
                details.appendChild(img_grid);
                container.appendChild(details);
            }

        })
        .catch((error) => {
            console.error(
                "There was a problem with the fetch operation:",
                error,
            );
        });
});
