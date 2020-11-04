const pin = '5852';

function soundErrorPin() {
    let audio = new Audio(); 
    audio.src = './media/audio.mp3'; 
    audio.autoplay = true;
}

function writeNumber(numb) {
    document.getElementById('pin-code').value = document.getElementById('pin-code').value + numb;
}

function checkPinCode() {
    if( String(document.getElementById('pin-code').value) === pin ) {
        document.getElementById('pin-code').value = '';
        document.querySelector('.wrapper').style = 'display: none;'; 
        document.querySelector('.wrapper-home').style = 'display: flex;'; 
    } else {
        document.getElementById('pin-code').value = '';
        document.querySelector('.pin-text').style = 'color: red;';
        document.querySelector('.pin-text').textContent = "Неправильный пин-код! Включена сигнализация!";
        soundErrorPin();
    }
}