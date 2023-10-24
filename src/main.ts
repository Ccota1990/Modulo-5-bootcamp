
let puntuacionInicial : number = 0;

const muestraPuntuacion = () => {
  const puntuacion = document.getElementById ("puntos")
  if(puntuacion) {
      puntuacion.innerHTML = `Tu puntuación es: ${puntuacionInicial.toString()}`
    }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);


const dameCarta = ()  => {
    let numeroBase = Math.floor (Math.random()*10)+1;
    if (numeroBase >7) {
        return numeroBase+2       
    } else{
        return numeroBase
    }
};

const muestraCarta = (carta: number) :void =>{
    let cartaElement = document.getElementById("carta") 
    if (cartaElement && cartaElement instanceof HTMLImageElement){
        switch(carta){
            case 1: cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
                break;
            case 2: cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
                break;
            case 3: cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
                break;
            case 4: cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
                break;
            case 5: cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
                break;
            case 6: cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
                break;
            case 7: cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
                break;
            case 10: cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
                break;
            case 11: cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
                break;
            case 12: cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
                break;
        }
    }

};

const pideCarta = () => {
    const carta = dameCarta();
    muestraCarta(carta);
    if(carta<8){
        puntuacionInicial = puntuacionInicial + carta 
    }else{
        puntuacionInicial = puntuacionInicial + 0.5
    }
    muestraPuntuacion();
    
    if(puntuacionInicial>7.5){
        let boton = document.getElementById("pedirCarta")
        if(boton && boton instanceof HTMLButtonElement){
            boton.disabled = true 
        };
        const resultado = document.getElementById ("resultado")
        if(resultado && resultado instanceof HTMLElement) {
            resultado.innerHTML = "¡¡Game over!!"
        }
        const botonNuevaPartida = document.getElementById("nuevaPartida")
        if(botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement){
            botonNuevaPartida.style.visibility="visible";
        }
    }
};

const mePlanto = () => {
    let boton = document.getElementById("pedirCarta")
        if(boton && boton instanceof HTMLButtonElement){
            boton.disabled = true 
        };
        const resultado = document.getElementById ("resultado")
        if(resultado){
            if(puntuacionInicial<4){
                resultado.innerHTML = "Has sido muy conservador"
            }
            if(puntuacionInicial===5) {
                resultado.innerHTML = "Te ha entrado el canguelo eh?"
            }
            if(puntuacionInicial===6 || puntuacionInicial===7){
                resultado.innerHTML = "Casi casi..."
            }
            if(puntuacionInicial===7.5){
                resultado.innerHTML = "¡Lo has clavado! ¡Enhorabuena!"
            }
            const botonNuevaPartida = document.getElementById("nuevaPartida")
            if(botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement){
            botonNuevaPartida.style.visibility="visible";
        }
        };

};

const nuevaPartida = () =>{

};

const botonPedirCarta = document.getElementById ("pedirCarta");
botonPedirCarta?.addEventListener("click", pideCarta);

const botonMePlanto =document.getElementById("meplanto");
botonMePlanto?.addEventListener("click", mePlanto);

const botonNuevaPartida =document.getElementById("nuevaPartida");
botonNuevaPartida?.addEventListener("click", nuevaPartida);