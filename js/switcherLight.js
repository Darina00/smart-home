function changeLight() {
    if(document.querySelector('.switches-light').checked) {
        document.querySelector('.wrapper-home').style.backgroundColor = 'rgb(241, 207, 155)';
        document.querySelector('.wrapper-home').style.color = 'black';
        document.querySelector('.window-with-jalusie').style.display = document.querySelector('.window').style.display = document.querySelector('.floor').style.display = document.querySelector('.floor-heating').style.display = 'block';
    } else {
        document.querySelector('.wrapper-home').style.backgroundColor = 'black';
        document.querySelector('.wrapper-home').style.color = 'white';
        document.querySelector('.window-with-jalusie').style.display = document.querySelector('.window').style.display = document.querySelector('.floor').style.display = document.querySelector('.floor-heating').style.display = 'none';
    }
}