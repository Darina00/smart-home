const soundPlay = function soundMotion() {
    let audioMotion = new Audio(); 
    audioMotion.src = './media/audio.mp3'; 
    audioMotion.autoplay = true;
}

function changeMotion() {
    if(document.querySelector('.switches-motion').checked) {
        document.addEventListener("mousemove", soundPlay, false);
    } else document.removeEventListener("mousemove", soundPlay, false);
}