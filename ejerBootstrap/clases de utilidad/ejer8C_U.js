    const audioPlayer = document.getElementById('audioPlayer');
    const volumeRange = document.getElementById('volumeRange');

    function playPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }

    function stop() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }

    function setVolume() {
        audioPlayer.volume = volumeRange.value;
    }
