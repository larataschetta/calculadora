
function algo(numer){
    
    let numero = document.getElementById(numer);
    let count = 1;
    numero.innerHTML = count;

    numero.onclick = function(){
        if (numero.innerHTML==0){
            count=0;
        }
        if ( count != 9){
            count +=1;
            numero.innerHTML = count;
        }
    }
    
}

/* function empezar() {
    const element = document.getElementById("numero1");
    const element2 = document.getElementById("numero2")

    const id = setInterval(frame, 1000);
    const od = setInterval(frame2,1000);

    function frame() {

        if (element.innerHTML == 0 ) {

        clearInterval(id);

        if (element2.innerHTML == 0){

            clearInterval(od);

            alert("TIEMPO")

        } else {

            element2.innerHTML -=1;

        }

    } else {

        element.innerHTML -= 1; 
    }
    }
}  */

function llevarACero(numero){
    const element = document.getElementById(numero);

    const intervalo = setInterval(inicio,1000);

    function inicio(){

        if (element.innerHTML == 0){
            clearInterval(intervalo);

        } else {
            element.innerHTML -=1;
        }
    }
}

function volverANueve(){
    const element2 = document.getElementById("numero2");
    const element1 = document.getElementById("numero1");

    const intervalo2 = setInterval(inicio,1000);

    function inicio(){
        
        if (element1.innerHTML ==0 & element2.innerHTML ==0){
            clearInterval(intervalo2);

        } else if (element2.innerHTML==0 & element1.innerHTML>=0){
            element2.innerHTML=9; 
            element1.innerHTML -=1;
            clearInterval(intervalo2);
            llevarACero("numero2");
        }
    }
}

/* function empezar2(){
    const num = document.getElementById("numero2").innerHTML
    contar(num,mostrar);
    function mostrar(valor){
        document.getElementById("numero2").innerHTML=valor;
    }
} */

// function empezar(){
//     const num1 = document.getElementById("numero1").innerHTML
//     const num2 = document.getElementById("numero2").innerHTML
//     const num3 = num1 + num2;
    
//     contar(num3,mostrar);

//     function mostrar(valor){
//         const array = valor.toString().padStart(2,"0").split("")
        
//         document.getElementById("numero1").innerHTML= array[0];
//         document.getElementById("numero2").innerHTML= array[1];
//     }
// }


// function contar(valor,callback){
//     algo()
//     function algo(){
//         valor --
//         callback(valor);
//         if (valor >0){
//             setTimeout(() => {
//                 algo();
//             }, 500);
//         }
//     }
// }

async function empezar(){
    const num1 = document.getElementById("numero1").innerHTML
    const num2 = document.getElementById("numero2").innerHTML
    const num3 = num1 + num2;
    
    const mensaje = await contar(num3,mostrar);

    alert(mensaje)
    
    function mostrar(valor){
        const array = valor.toString().padStart(2,"0").split("")
        
        document.getElementById("numero1").innerHTML= array[0];
        document.getElementById("numero2").innerHTML= array[1];
    }
}


function contar(valor,callback){
    return new Promise((resolve) => {
        algo()
        function algo(){
            valor --
            callback(valor);
            if (valor > 0){
                setTimeout(() => {
                    algo();
                }, 1000);
            } else {
                resolve('fin')
            }
        }
    })
}
