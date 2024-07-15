document.addEventListener("DOMContentLoaded", function () {
    var url = "/static/members/core_members.json";

    var core_cards = document.getElementById("core-cards");

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            for (member in data) {
                var position = data[member]["position"];

                var div = document.createElement("div");
                div.className = "member-card core"

                var member_image = document.createElement("img");
                member_image.className = "member-card-image";
                var member_name = document.createElement("h3");
                member_name.className = "member-card-name";
                var position_name = document.createElement("p");
                position_name.className = "member-card-desc";

                var links_div = document.createElement("div");
                links_div.className = "socials-links";

                let links = data[member]["links"];
                for (i in links) {
                    var anchor_tag = document.createElement("a");
                    anchor_tag.href = `${links[i]}`;
                    var social_icon = document.createElement("img");
                    social_icon.className = "social-links-icon";
                    social_icon.src = `/static/icons/${i}.svg`;
                    anchor_tag.appendChild(social_icon);
                    links_div.appendChild(anchor_tag);
                }

                member_image.src = data[member]["image"];
                member_name.textContent = member;
                position_name.textContent = position;

                div.append(member_image);
                div.append(member_name);
                div.append(position_name);
                div.append(links_div);

                core_cards.append(div);
            }

        })
        .catch((error) => {
            console.error(
                "There was a problem with the fetch operation:",
                error,
            );
        });
});
