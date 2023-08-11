document.addEventListener('DOMContentLoaded', function () {
    const fechaEvento = new Date('[Fecha y hora del evento en formato YYYY-MM-DDTHH:MM:SS]').getTime();

    function actualizarContador() {
        const ahora = new Date().getTime();
        const distancia = fechaEvento - ahora;

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        document.getElementById('dias').innerText = String(dias).padStart(2, '0');
        document.getElementById('horas').innerText = String(horas).padStart(2, '0');
        document.getElementById('minutos').innerText = String(minutos).padStart(2, '0');
        document.getElementById('segundos').innerText = String(segundos).padStart(2, '0');

        if (distancia < 0) {
            clearInterval(intervalo);
            document.getElementById('contador').innerText = '¡Es hora del evento!';
        }
    }

    actualizarContador();
    const intervalo = setInterval(actualizarContador, 1000);
});