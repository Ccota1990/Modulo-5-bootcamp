
let puntuacionInicial : number = 0;

const muestraPuntuacion = () => {
  const puntuacion = document.getElementById ("puntos")
  if(puntuacion !== null && puntuacion !== undefined && puntuacion instanceof HTMLElement) {
      puntuacion.innerHTML = `Tu puntuación es ${puntuacionInicial.toString()}`
    }
}

document.addEventListener("DOMContentLoaded", muestraPuntuacion);


const dameCarta = ()  => {
    let numeroBase = Math.floor (Math.random()*10)+1;
    if (numeroBase >7) {
        return numeroBase+2       
    } else{
        return numeroBase
    }
};

const getUrl = (carta: number) :string =>{
        switch(carta){
            case 1: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
                 
            case 2: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
                
            case 3: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
                 
            case 4: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
                 
            case 5: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
                 
            case 6: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
                 
            case 7: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
                 
            case 10: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
                 
            case 11: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
                 
            case 12: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
             
            default: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg" ; 
        }
};

const muestraCarta = (url: string) =>{
    const imagenCarta = document.getElementById("carta")
    if(imagenCarta !== null && imagenCarta !== undefined && imagenCarta instanceof HTMLImageElement){
        imagenCarta.src = url
    }
};

const pideCarta = () => {
    const carta = dameCarta();
    const url = getUrl(carta);
    muestraCarta(url);
    sumarPuntuacion(carta);
    muestraPuntuacion();
    comprobarPuntuacion();

};

const sumarPuntuacion = (carta: number) =>{
    if(carta<8){
        puntuacionInicial = puntuacionInicial + carta 
    }else{
        puntuacionInicial = puntuacionInicial + 0.5
    }  
}

const comprobarPuntuacion =() =>{
    if(puntuacionInicial>7.5){
        let boton = document.getElementById("pedirCarta")
        if(boton  !== null && boton!== undefined && boton instanceof HTMLButtonElement){
            boton.disabled = true 
        };
        const resultado = document.getElementById ("resultado")
        if(resultado !== null && resultado !== undefined && resultado instanceof HTMLElement) {
            resultado.innerHTML = "¡¡Game over!!"
        }
        const botonNuevaPartida = document.getElementById("nuevaPartida")
        if(botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement){
            botonNuevaPartida.style.visibility="visible";
        }
    }
    
    if(puntuacionInicial===7.5){
        let boton = document.getElementById("pedirCarta")
        if(boton !== null && boton !== undefined && boton instanceof HTMLButtonElement){
            boton.disabled = true 
        };
        const resultado = document.getElementById ("resultado")
        if(resultado !== null && resultado !== undefined && resultado instanceof HTMLElement) {
            resultado.innerHTML = "¡Lo has clavado! ¡Enhorabuena!"
        }
        const botonNuevaPartida = document.getElementById("nuevaPartida")
        if(botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement){
            botonNuevaPartida.style.visibility="visible";
        }
    }
    
};

const resultados = () => {
    const resultado = document.getElementById ("resultado")
        if(resultado!== null && resultado !== undefined && resultado instanceof HTMLElement){
            if(puntuacionInicial<4){
                resultado.innerHTML = "Has sido muy conservador"
            }
            if(puntuacionInicial===5) {
                resultado.innerHTML = "Te ha entrado el canguelo eh?"
            }
            if(puntuacionInicial>=6 && puntuacionInicial<=7){
                resultado.innerHTML = "Casi casi..."
            }
            if(puntuacionInicial===7.5){
                resultado.innerHTML = "¡Lo has clavado! ¡Enhorabuena!"
            }
    };
};

const mePlanto = () => {
    let boton = document.getElementById("pedirCarta")
    if(boton !== null && boton !== undefined && boton instanceof HTMLButtonElement){
        boton.disabled = true 
    };
    resultados();
    
    const botonNuevaPartida = document.getElementById("nuevaPartida")
    if(botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement){
    botonNuevaPartida.style.visibility="visible";
    }
};

const nuevaPartida = () =>{
    let cartaElement = document.getElementById("carta") 
    let puntuacion = document.getElementById("puntos")
    let botonPedirCarta = document.getElementById("pedirCarta")
    let botonNuevaPartida = document.getElementById("nuevaPartida")
    let resultado = document.getElementById ("resultado")

    if(cartaElement !== null && cartaElement !== undefined && cartaElement instanceof HTMLImageElement){
        cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
    }
    if(puntuacion !== null && puntuacion !== undefined && puntuacion instanceof HTMLElement){
        puntuacion.innerHTML = "0"
        puntuacionInicial = 0
    }
    if(botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement){
        botonPedirCarta.disabled=false
    }
    if(botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement){
        botonNuevaPartida.style.visibility="hidden";
    }
    if(resultado !== null && resultado !== undefined && resultado instanceof HTMLElement){
        resultado.innerHTML = ""
    }
};

const botonPedirCarta = document.getElementById ("pedirCarta")
if(botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement){
    botonPedirCarta.addEventListener("click", pideCarta); 
};

const botonMePlanto =document.getElementById("meplanto")
if(botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement){
    botonMePlanto.addEventListener("click", mePlanto);
}

const botonNuevaPartida =document.getElementById("nuevaPartida")
if(botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement){
    botonNuevaPartida?.addEventListener("click", nuevaPartida);
}