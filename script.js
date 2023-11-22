document.addEventListener("DOMContentLoaded", function() {
    // Define the audio:
    var cardOpenSound = document.getElementById('cardOpenSound');

    // Lottie A (Plays Once)
    var animationA = lottie.loadAnimation({
        container: document.getElementById('lottieA'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'top-snowflakes.json' // Update this path
        // Play card-open.mp3 when the page loads
        cardOpenSound.play();
    });

    // Lottie B (First Frame Only)
    var animationB = lottie.loadAnimation({
        container: document.getElementById('lottieB'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'snowglobe-text-03.json' // Update this path
    });
    animationB.goToAndStop(0, true); // Go to the first frame and stop

    // Lottie C (Loops Continuously)
    var animationC = lottie.loadAnimation({
        container: document.getElementById('lottieC'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'snowglobe-loop-01.json' // Update this path
    });


});
