const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');

playPauseButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = '🔊';
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = '🔈';
    }
});