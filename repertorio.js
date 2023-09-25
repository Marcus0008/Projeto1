const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");
const playlistItems = playlist.querySelectorAll("li");
const songName = document.getElementById("song-name");
const songImage = document.createElement("img");
songImage.id = "expanded-image";

let currentIndex = -1;

playlistItems.forEach((item, index) => {
    item.addEventListener("click", function() {
        currentIndex = index;
        const src = this.getAttribute("data-src");
        const name = this.textContent;
        audio.src = src;
        audio.load();
        audio.play();
        songName.textContent = name;
        songName.style.display = "block";
        songImage.src = ""; // Remova a imagem atual
        songImage.style.display = "none"; // Oculta a imagem
    });
});

audio.addEventListener("ended", function() {
    playNextSong();
});

function playNextSong() {
    currentIndex++;
    if (currentIndex < playlistItems.length) {
        const nextItem = playlistItems[currentIndex];
        const src = nextItem.getAttribute("data-src");
        const name = nextItem.textContent;
        audio.src = src;
        audio.load();
        audio.play();
        songName.textContent = name;
        songImage.src = ""; // Remova a imagem atual
        songImage.style.display = "none"; // Oculta a imagem
    } else {
        currentIndex = -1;
        audio.pause();
        songName.style.display = "none"; // Oculta o nome da música
        songImage.style.display = "none"; // Oculta a imagem
    }
}

// Adicionar controle para próxima música
const controls = document.createElement("div");
controls.id = "controls";
const nextButton = document.createElement("button");
nextButton.id = "next-button";
nextButton.textContent = "Próxima Música";
nextButton.addEventListener("click", playNextSong);
controls.appendChild(nextButton);
songName.parentNode.appendChild(controls);
