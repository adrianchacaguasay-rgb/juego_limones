let canvas=document.getElementById("areaJuego");    
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=30;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ANCHO_LIMON=20;
const ALTURA_LIMON=20;
let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let limonX=canvas.width/2;
let limonY=5;
let puntaje=0;
let vidas=3;
let velocidadCaida=200;
let intervalo;


function iniciar(){
    intervalo = setInterval(bajarLimon,velocidadCaida);//primer parametro: funcion  segundoParametro:tiempo en milisegundos
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
}

function dibujarSuelo(){    
    ctx.fillStyle="blue";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
    
}

function dibujarPersonaje(){    
    ctx.fillStyle="yellow";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE)

}

function moverIzquierda(){  
    personajeX=personajeX-10;
    actualizarPantalla();
}
function moverDerecha(){  
    personajeX=personajeX+10;
    actualizarPantalla();

}
function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();

}
function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function dibujarLimon(){    
    ctx.fillStyle="green";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);


}
function bajarLimon(){  
    limonY=limonY+10;
    actualizarPantalla();
    detectarPiso();
    detectarAtrapado();

}

function detectarAtrapado(){
        if( limonX+ANCHO_LIMON>personajeX &&    
            limonX<personajeX+ANCHO_PERSONAJE &&   
            limonY+ALTURA_LIMON>personajeY &&    
            limonY<personajeY+ALTURA_PERSONAJE){   
            alert("ATRAPADO !!");  
            aparecerLimon();    
            puntaje=puntaje+1;
            mostrarEnSpan("txtPuntaje",puntaje);    
            
            if(puntaje==3){
                cambiarVelocidad(150);
            }
            if(puntaje==6){
                cambiarVelocidad(100);
            }
            if(puntaje==10){
                alert("tienes limones haz limonada 😋😋");
               
            }
    }
}
function aparecerLimon(){
   limonX= generarAleatorio(0,canvas.width-ANCHO_LIMON);
   limonY= 0;
   actualizarPantalla();
}
function detectarPiso(){
    if(limonY+ALTURA_LIMON == canvas.height-ALTURA_SUELO){
        aparecerLimon();
        vidas=vidas-1;      
        mostrarEnSpan("txtVidas",vidas);
        if(vidas==0){
            alert("Game Over!!");   
            
        }
        }
    }
function cambiarVelocidad(nuevaVelocidad){

    velocidadCaida = nuevaVelocidad
    intervalo=setInterval(bajarLimon,velocidadCaida);
}
