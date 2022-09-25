const gameboy = document.querySelector('#gameboy');
const sonidoEncendido = document.querySelector('#sonido-encendido');

gameboy.addEventListener('mouseenter', () => {
    setTimeout(() => {
        sonidoEncendido.play();
    }, 3000)
})
