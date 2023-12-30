window.addEventListener('load', () => {
    console.log("Veo que estás intentando destripar nuestra web... Eso es bueno, has conseguido un descuento en una de nuestras clases!")
    console.log("Pero antes nos jugaremos el código de descuento a piedra, papel o tijera...")
    window.jugar = function (eleccionUsuario) {
        const elecciones = ['piedra', 'papel', 'tijeras'];
        const eleccionComputadora = elecciones[Math.floor(Math.random() * 3)];

        console.log(`Tu elección: ${eleccionUsuario}, Elección de la computadora: ${eleccionComputadora}`);

        if (eleccionUsuario === eleccionComputadora) {
            console.log('Empate');
        } else if (
            (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijeras') ||
            (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
            (eleccionUsuario === 'tijeras' && eleccionComputadora === 'papel')
        ) {
            console.log('Enhorabuena! este es tu código del 10% de descuento aplicable a una clase "CURIOSOYGANADOR"');
        } else {
            console.log('Aún no puedes derrotar al maestro de Piedra, Papel o Tijera pero buen intento');
        }
    }
})


