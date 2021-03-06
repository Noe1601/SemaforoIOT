var circles = document.querySelectorAll('.circle');
var activeLight = 0;
var botonCruzar = document.getElementById("add");
var personasSolicitando = 0;

function Cruzar() {
    personasSolicitando = personasSolicitando + 1;
    console.log(personasSolicitando);
}

botonCruzar.addEventListener('click', function(e) {
    Cruzar();
    e.preventDefault();
});

setInterval(changeLight, 10000);

function changeLight() {

    circles[activeLight].className = 'circle';
    activeLight++;

    if (activeLight > 2) {
        activeLight = 0;
    }

    var currentLight = circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'));
    console.log(currentLight.getAttribute('color'));

    var database = firebase.database();

    database.ref('/Color').set({
        color: currentLight.getAttribute('color')
    });

    database.ref('/Personas').set({
        solicitantes: personasSolicitando
    });

}