alert("Bienvenido a ¡Mokepon!")

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('botón-reinicio')
const seleccionarMascota = document.getElementById('botón-seleccionar')
const abrirMensaje = document.getElementById('mensajes')
const abrirResultados = document.getElementById('resultados')


const sectionSeleccionarMascotaJugador = document.getElementById('seleccionar-mascota')
const sectionBotonSeleccionar = document.getElementById('botón-seleccionar')
const botonReiniciar = document.getElementById('reiniciar')

const spanMascotaJugador = document.getElementById('mascota-aliada')

const spanMascotaEnemigo = document.getElementById('mascota-enemiga')

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
    
const sectionMensajes = document.getElementById('mensajes')
const ataquesJugador = document.getElementById('ataques-jugador')
const ataquesEnemigos = document.getElementById('ataques-enemigo')

const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let inputDian
let inputFoule
let inputSaipos
let inputTyrem
let mascotaJugador
let ataquesMokepon
let botonFuego
let botonAgua
let botonAire
let botonTierra
let botonNormal
let opcionDeMokepones
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida,) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

const dian = new Mokepon('Dian',"./assets/Mascotas/DIAN.png", 5 )
const foule = new Mokepon('Foule',"./assets/Mascotas/FOULE.png", 5 )
const saipos = new Mokepon('Saipos',"./assets/Mascotas/SAIPOS.png", 5 )
const tyrem = new Mokepon('Tyrem',"./assets/Mascotas/ELTUNAS.png", 5 )

dian.ataques.push(
    {nombre: '🔥', id: 'botón-fuego' },
    {nombre: '🔥', id: 'botón-fuego' },
    {nombre: '🥊', id: 'botón-fuego' },
    {nombre: '💧', id: 'botón-normal' },
    {nombre: '🍃', id: 'botón-aire' },
    {nombre: '🪨', id: 'botón-tierra' },

)
foule.ataques.push(
    {nombre: '💧', id: 'botón-agua' },
    {nombre: '💧', id: 'botón-agua' },
    {nombre: '🥊', id: 'botón-normal' },
    {nombre: '🔥', id: 'botón-fuego' },
    {nombre: '🍃', id: 'botón-aire' },
    {nombre: '🪨', id: 'botón-tierra' },

)
saipos.ataques.push(
    {nombre: '🍃', id: 'botón-aire' },
    {nombre: '🍃', id: 'botón-aire' },
    {nombre: '🥊', id: 'botón-normal' },
    {nombre: '💧', id: 'botón-agua' },
    {nombre: '🔥', id: 'botón-fuego' },
    {nombre: '🪨', id: 'botón-tierra' },

)
tyrem.ataques.push(
    {nombre: '🪨', id: 'botón-tierra' },
    {nombre: '🪨', id: 'botón-tierra' },
    {nombre: '🥊', id: 'botón-normal' },
    {nombre: '💧', id: 'botón-agua' },
    {nombre: '🍃', id: 'botón-aire' },
    {nombre: '🔥', id: 'botón-fuego' },

)
mokepones.push(dian,foule,saipos,tyrem);


function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="contenedor-mascota" for=${mokepon.nombre}>
            <div class="nombre">${mokepon.nombre}</div>
        
            <div class="mascota">
                    <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
                
                
                

    contenedorTarjetas.innerHTML += opcionDeMokepones
        
        inputDian = document.getElementById('Dian');
        inputFoule = document.getElementById('Foule');
        inputSaipos = document.getElementById('Saipos');
        inputTyrem = document.getElementById('Tyrem');


                
    })



    
    
    seleccionarMascota.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)

    
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascotaJugador.style.display = 'none'
    sectionBotonSeleccionar.style.display = 'none'
   sectionSeleccionarAtaque.style.display = 'block'
    abrirMensaje.style.display = 'block'
   abrirResultados.style.display = 'block'

    if (inputDian.checked) {
        alert("¡Dian, yo te elijo!")
        spanMascotaJugador.innerHTML = inputDian.id
        mascotaJugador = inputDian.id
    } 
    else if (inputFoule.checked) {
        alert("¡Foule, yo te elijo!")
        spanMascotaJugador.innerHTML = inputFoule.id
        mascotaJugador = inputFoule.id
    } 
    else if (inputSaipos.checked) {
        alert("¡Saipos, yo te elijo!")
        spanMascotaJugador.innerHTML = inputSaipos.id
        mascotaJugador = inputSaipos.id
    } 
    else if (inputTyrem.checked) {
        alert("¡Tyrem, yo te elijo!")
        spanMascotaJugador.innerHTML = inputTyrem.id
        mascotaJugador = inputTyrem.id
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemiga()
}
function extraerAtaques(mascotaJugador){
    let ataques = [];
    for (let i = 0; i < mokepones.length; i++) {
        console.log(`Comparando ${mascotaJugador} con ${mokepones[i].nombre}`);
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques;
        }
        
    }
    console.log('Ataques extraídos:', ataques);
    mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
    if (ataques && ataques.lenght > 0) {
        contenedorAtaques.innerHTML = '';
        ataques.forEach((ataque) => {
            let ataquesMokepon = `
            <button id=${ataque.id} class="botón-de-ataque">${ataque.nombre}
            </button>
            `;
            contenedorAtaques.innerHTML += ataquesMokepon;
        });

        botonFuego = document.getElementById('botón-fuego');
        botonAgua = document.getElementById('botón-agua');
        botonAire = document.getElementById('botón-aire');
        botonTierra = document.getElementById('botón-tierra');
        botonNormal = document.getElementById('botón-normal');

    if (botonFuego) botonFuego.addEventListener('click', ataqueFuego)
    if (botonAgua) botonAgua.addEventListener('click', ataqueAgua)
    if (botonAire) botonAire.addEventListener('click', ataqueAire)
    if (botonTierra) botonTierra.addEventListener('click', ataqueTierra)
    if (botonNorma) botonNormal.addEventListener('click', ataqueNormal)
    }else {
        console.error('NO ATAQUES PARA MOSTRAR')
    }
}

function seleccionarMascotaEnemiga() {
    let mascotaAleatorio = aleatorio(0, mokepones.length -1)
    
        spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
   

}

function ataqueFuego() {
    ataqueJugador = "Fuego"
    ataqueEnemigoAleatorio()
}

function ataqueAgua() {
    ataqueJugador = "Agua"
    ataqueEnemigoAleatorio()
}

function ataqueAire() {
    ataqueJugador = "Aire"
    ataqueEnemigoAleatorio()
}

function ataqueTierra() {
    ataqueJugador = "Tierra"
    ataqueEnemigoAleatorio()
}
function ataqueNormal() {
    ataqueJugador = "normal"
}

function ataqueEnemigoAleatorio() {
    let ataqueAleatorio = aleatorio(1, 5)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua"
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "Aire"
    } else if (ataqueAleatorio == 4) {
        ataqueEnemigo = "Tierra"
    } else if (ataqueAleatorio == 5) {
        ataqueEnemigo = "normal"
    }
    combate()
}

function combate() {

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje(" Tu mascota ha realizado un ataque SIN EFECTO ");
        
    } else if (
        (ataqueJugador == "Fuego" && ataqueEnemigo == "Aire") || (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") || (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") || (ataqueJugador == "Aire" && ataqueEnemigo == "Tierra") ) {
        crearMensaje(" Tu mascota ha realizado un ataque CRÍTICO ");
        vidasEnemigo -= 2; 
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (
        (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") || (ataqueJugador == "Agua" && ataqueEnemigo == "Aire") || (ataqueJugador == "Tierra" && ataqueEnemigo == "Fuego") || (ataqueJugador == "Aire" && ataqueEnemigo == "Agua") ) {
        crearMensaje(" Tu mascota ha realizado un ataque DÉBIL ");
        vidasJugador--; 
        spanVidasJugador.innerHTML = vidasJugador;
        vidasEnemigo--; 
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (
        (ataqueJugador == "Fuego" && ataqueEnemigo == "Agua") || (ataqueJugador == "Agua" && ataqueEnemigo == "Tierra") || (ataqueJugador == "Tierra" && ataqueEnemigo == "Aire") || (ataqueJugador == "Aire" && ataqueEnemigo == "Fuego") ) {
        crearMensaje(" Tu mascota ha sido atacada con un Crítico ");
        vidasJugador -= 2; 
        spanVidasJugador.innerHTML = vidasJugador;
    } else {
        crearMensaje(" Tu mascota ha realizado un ataque NORMAL ");
        vidasEnemigo--; 
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    }

    revisarVidas();
}

function revisarVidas(){
    if (vidasEnemigo < 0 && vidasJugador > 0) {
        MensajeFinal("¡Han ganado! :D. ¡eso es!")
    }if (vidasJugador < 0 && vidasEnemigo > 0) {
        MensajeFinal("han perdido :(. Lo siento mucho")
    }if(vidasEnemigo <= 0 && vidasJugador <= 0){
        MensajeFinal("¡Amabas mascotas han caido, que poder!")
    }
}

function crearMensaje(resultado) {
    
    
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')
    
    

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
    
    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigos.appendChild(nuevoAtaqueEnemigo)
    
}
function MensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')
    sectionMensajes.innerHTML = resultadoFinal


    botonFuego.disabled = true
        console.log("guau guau");
    botonAgua.disabled = true
        console.log("guau guau");

    botonAire.disabled = true
        console.log("guau guau");

    botonTierra.disabled = true
        console.log("guau guau");
        sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
    
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', iniciarJuego)
