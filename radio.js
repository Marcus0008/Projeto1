const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");
const playlistItems = playlist.querySelectorAll("li");
const songInfo = document.getElementById("song-info");
const songTitle = document.getElementById("song-title");
const songImage = document.getElementById("song-image");
const prevButton = document.getElementById("prev-button");
const pauseButton = document.getElementById("pause-button");
const nextButton = document.getElementById("next-button");

let currentIndex = -1;

function playCurrentSong() {
    if (currentIndex >= 0 && currentIndex < playlistItems.length) {
        const currentItem = playlistItems[currentIndex];
        const src = currentItem.getAttribute("data-src");
        const name = currentItem.textContent; // Use o texto do item como nome
        const image = currentItem.getAttribute("data-image");
        audio.src = src;
        audio.load();
        audio.play();
        songTitle.textContent = name;
        songImage.src = `images/${image}`;
        songInfo.style.display = "block";
    }
}

function playNextSong() {
    currentIndex++;
    if (currentIndex >= playlistItems.length) {
        currentIndex = 0;
    }
    playCurrentSong();
}

function playPrevSong() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = playlistItems.length - 1;
    }
    playCurrentSong();
}

playlistItems.forEach((item, index) => {
    item.addEventListener("click", function() {
        currentIndex = index;
        playCurrentSong();
    });
});

audio.addEventListener("ended", playNextSong);

prevButton.addEventListener("click", playPrevSong);
pauseButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
nextButton.addEventListener("click", playNextSong);

