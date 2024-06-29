document.addEventListener("DOMContentLoaded", function () {
    var url = "/static/gallery/gallery.json";
    var gallery_container = document.getElementById("gallery-container");
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was !ok");
            }
            return response.json();
        })
        .then((data) => {
            data.photos.forEach(photo => {
                var div = document.createElement("div");
                div.className = "photo-card";

                var img = document.createElement("img");
                img.src = photo.url;
                img.alt = photo.description;

                var caption = document.createElement("p");
                caption.textContent = photo.description;

                div.append(img);
                div.append(caption);

                gallery_container.append(div);
            });
        })
        .catch((error) => {
            console.error(
                "bad fetch operation:",
                error
            );
        });
});
