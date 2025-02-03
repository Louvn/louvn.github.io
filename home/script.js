document.addEventListener("DOMContentLoaded", () => {
    const games = [
        { title: "Spiel 1", image: "https://via.placeholder.com/200", link: "game.html" },
        { title: "Spiel 2", image: "https://via.placeholder.com/200", link: "game.html" },
        { title: "Spiel 3", image: "https://via.placeholder.com/200", link: "game.html" }
    ];

    const gameList = document.getElementById("game-list");

    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        gameCard.innerHTML = `
            <a href="${game.link}">
                <img src="${game.image}" alt="${game.title}">
                <h3>${game.title}</h3>
            </a>
        `;

        gameList.appendChild(gameCard);
    });
});
