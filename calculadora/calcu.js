//OPERACIONES

function sumar(num1,num2){
    return num1 + num2;
}

function restar(num1,num2){
    return num1 - num2;
} 

function multiplicar(num1,num2){
    return num1 * num2;
}

function dividir(num1,num2){
    return num1 / num2;
}


//CALCULADORA

let pantalla = document.getElementById("display");
let pantallaOculta = document.getElementById("displayOculto");
let cambioPantalla = false;
let operador;

function seleccionNumero(num){
    if (cambioPantalla){
        pantallaOculta.innerHTML += num;
    } else {
        pantalla.innerHTML += num;
    }
}

function sumar2(){
    cambioPantalla = true;
    operador= sumar;
}

function restar2(){
    cambioPantalla =true;
    operador = restar;
}

function multiplicar2(){
    cambioPantalla = true;
    operador = multiplicar;
}

function dividir2(){
    cambioPantalla = true;
    operador = dividir;
}

function borrarTodo(){
    pantalla.innerHTML = "";
    pantallaOculta.innerHTML = "";
    cambioPantalla = false
}

function igual(){
    // pantalla.innerHTML= parseFloat(pantalla.innerHTML) + parseFloat(pantallaOculta.innerHTML);
    // return operador(num1,num2);

    pantalla.innerHTML= operador(parseFloat(pantalla.innerHTML),parseFloat(pantallaOculta.innerHTML));
    pantallaOculta.innerHTML = "";
    
}
