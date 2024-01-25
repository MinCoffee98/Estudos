document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("birthday-song");
    const playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playButton.classList.add("playing");
        } else {
            audio.pause();
            playButton.classList.remove("playing");
        }
    });

    audio.onended = function() {
        playButton.classList.remove("playing");
        alert("Espero que tenha gostado da animação! 🎉");
    };

    
});

