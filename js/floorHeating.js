function checkFloor() {
    if(document.getElementById('customRadioInline1').checked) {
        document.querySelector('.floor').style.border = '5px solid blue';
    } else if(document.getElementById('customRadioInline2').checked) {
        document.querySelector('.floor').style.border = '5px solid orange';
    } else if(document.getElementById('customRadioInline3').checked) {
        document.querySelector('.floor').style.border = '5px solid red';
    }
}