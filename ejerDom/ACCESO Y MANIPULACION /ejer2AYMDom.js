document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const playlist = document.getElementById("playlist");
  const songs = [
    { name: "Canción 1", src: "../../captura de pantalla/Adele-Easy-On-Me-_Official-Video_.mp3" },
    { name: "Canción 2", src: "../../captura de pantalla/Rihanna-Diamonds.mp3" },
  ];

  songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = song.name;
    listItem.setAttribute("data-src", song.src);
    listItem.addEventListener("click", function () {
      playSong(index);
    });
    playlist.appendChild(listItem);
  });

  function playSong(index) {
    const selectedSong = songs[index];
    audioPlayer.src = selectedSong.src;
    audioPlayer.play();
  }
});
