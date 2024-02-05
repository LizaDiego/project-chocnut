document.getElementById('play-button').addEventListener('click', function() {
    var video = document.getElementById('video');
    var playButton = document.getElementById('play-button');

    // Show the video and hide the play button
    video.style.display = 'block';
    playButton.style.display = 'none';

    // Play the video
    video.play();
});
