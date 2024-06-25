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

                console.log(member, position);

                var div = document.createElement("div");
                div.className = "core-card"

                var member_name = document.createElement("h4");
                var position_name = document.createElement("p");

                member_name.textContent = member;
                position_name.textContent = position;

                div.append(member_name);
                div.append(position_name);

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
