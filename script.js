const duracionGiro = 500;
const elementos = document.querySelectorAll(".slot img");
const palanca = document.getElementById("palanca");

palanca.addEventListener("click", giro);

function obtenerAleatorios() {
    var numeroAleatorio = Math.floor(Math.random() * 10);
    var rutaImagen = `./tm-img/${numeroAleatorio}.png`;
    return rutaImagen;
}

//PALANCIA HACIA ABAJO
palanca.addEventListener("mousedown", function () {
    palanca.src = "tm-img/down.png";
  });
  
  //PALANCA HACIA ARRIBA
  palanca.addEventListener("mouseup", function () {
    palanca.src = "tm-img/up.png";
  });

function giro() {

    const valores = [obtenerAleatorios(), obtenerAleatorios(), obtenerAleatorios()];
    const comienzo = Date.now();

    function girarUnaVez(indice) {
        const ahora = Date.now();
        const tiempTrans = ahora - comienzo;
        if (tiempTrans < duracionGiro) {
            elementos[indice].src = obtenerAleatorios();
            requestAnimationFrame(() => girarUnaVez(indice));
        } else {
            elementos[indice].src = valores[indice];
            if (indice === 2) {
                setTimeout(function() {
                    ganaONo();
                }, 100);
            }
        }
    }

    for (let i = 0; i < elementos.length; i++) {
        girarUnaVez(i);
    }
}

function ganaONo() {
    if (
        elementos[0].src === elementos[1].src &&
        elementos[1].src === elementos[2].src
    ) {
        alert("¡Has ganado! Los TRES(3) slots coinciden!");
    } else if (
        elementos[0].src === elementos[1].src ||
        elementos[1].src === elementos[2].src ||
        elementos[0].src === elementos[2].src
    ) {
        alert("¡Has ganado! Los DOS(2) slots coinciden!");
    }
}


