var audio = document.getElementById('audioPlayer');
var song = [
    { name: "Canción 1", src: "cancion1.mp3" },
    { name: "Canción 2", src: "cancion2.mp3" }
]

 var songIndex = 0;
 
function playPause() {
if (audio.paused) {
audio.play();
}
audio.pause();
}

function setVolume() {
audio.volume = document.getElementById("volume").value;
}
function changeSong(){
    songIndex = document.getElementById('songSelector');
    var selectedSong = song[songIndex];
audio.src = selectedSong.src;
audio.play();
}
