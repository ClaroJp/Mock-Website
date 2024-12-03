
const video = document.getElementById('myVideo');
const volumeButton = document.getElementById('volumeButton');
const replayButton = document.getElementById('replayButton');

video.muted = true;

volumeButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        volumeButton.classList.remove('muted');
    } else {
        video.muted = true; 
        volumeButton.classList.add('muted'); 
        }
});


video.addEventListener('ended', () => {
    document.body.classList.add('video-ended');
});

replayButton.addEventListener('click', () => {
    video.currentTime = 0; 
    video.play();
    document.body.classList.remove('video-ended');
});
