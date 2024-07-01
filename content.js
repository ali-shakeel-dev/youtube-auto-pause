let videoPlayer = document.querySelector('video');

if (videoPlayer) {
    let wasPaused = videoPlayer.paused;

    // Function to pause the video
    function pauseVideo() {
        if (!videoPlayer.paused) {
            videoPlayer.pause();
            wasPaused = true;
        }
    }

    // Function to play the video
    function playVideo() {
        if (wasPaused) {
            videoPlayer.play();
            wasPaused = false;
        }
    }

    // Listen for visibility change to pause/resume video
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
            playVideo();
        } else {
            pauseVideo();
        }
    });

    // Listen for page focus change to pause/resume video
    window.addEventListener('focus', function () {
        playVideo();
    });

    window.addEventListener('blur', function () {
        pauseVideo();
    });

    // Additional check for pausing when navigating away from YouTube
    window.addEventListener('beforeunload', function () {
        pauseVideo();
    });
}
