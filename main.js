
function abrirContainer() {
    document.querySelector('.circle-container').style.transform = 'rotate(-80deg)';
    document.querySelector('.container').style.transform = 'rotate(-15deg)';

    // console.log('Hola')
}//cierre function

function cerrarContainer() {
    document.querySelector('.circle-container').style.transform = 'rotate(0deg)';
    document.querySelector('.container').style.transform = 'rotate(0deg)';
}//cierre funtcion
