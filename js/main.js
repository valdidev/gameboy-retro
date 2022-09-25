const gameboy = document.querySelector('#gameboy');
const sonidoEncendido = document.querySelector('#sonido-encendido');

gameboy.addEventListener('mouseenter', () => {
    let temp = setTimeout(() => {
        sonidoEncendido.play();
    }, 2500)

    gameboy.addEventListener('mouseleave', () => {
        clearTimeout(temp);
    })
})

