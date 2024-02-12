document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById("audio");
  const playPause = document.getElementById("play");

  playPause.addEventListener('click', () => {
      if (audio.paused || audio.ended) {
          playPause.querySelector(".fa-pause").classList.toggle("hide");
          playPause.querySelector(".fa-play").classList.toggle("hide");
          audio.play();
      } else {
          audio.pause();
          playPause.querySelector(".fa-pause").classList.toggle("hide");
          playPause.querySelector(".fa-play").classList.toggle("hide");
      }
  });
});