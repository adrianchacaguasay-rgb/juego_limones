function generarAleatorio(min,max){ 
    let random=Math.random();
    //ejemplo: max es 600, min es 5
    let numero=random*(max-min); // 0- max  0-595
    let numeroEntero= Math.ceil(numero); 

    numeroEntero=numeroEntero+min;//5-600
    return numeroEntero
}

function probarAletorio(){
    let aleatorio = generarAleatorio(10,80);    
    console.log(aleatorio)
}