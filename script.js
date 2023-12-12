document.addEventListener("DOMContentLoaded", function() {
    // Define the audio:
    // var cardOpenSound = document.getElementById('cardOpenSound');

    // Lottie A (Plays Once)
    var animationA = lottie.loadAnimation({
        container: document.getElementById('lottieA'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'top-snowflakes.json' // Update this path
    });

    // Lottie C (Loops Continuously)
    var animationC = lottie.loadAnimation({
        container: document.getElementById('lottieC'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'snowglobe-loop-08.json' // Update this path
    });


});
