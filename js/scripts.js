
/* Juego */

String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 


const palabras = ["casa", "auto", "garage", "sahumerio", "llave", "auricular", "otorrinolaringologo"]

const palabra = palabras[Math.floor(Math.random()*palabras.length)]
let palabraConGuiones = palabra.replace(/./g, "_ ");
document.querySelector('#output').innerHTML = palabraConGuiones;
let contadorDeFallos = 0;

function calcular(){
    
    const letra = document.querySelector("#letra").value;
    
    let haFallado = true;
    
    
    for (const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            haFallado = false;
        }
    }

    if(haFallado){
        contadorDeFallos++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(199*contadorDeFallos) + 'px 0'
        
        
        letraNo = document.createElement("p");
        letraNo.classList.add("letra-faltante");
        letraNo.textContent = letra;
        document.querySelector("#letrasFaltantes").appendChild(letraNo);
       
        if(contadorDeFallos == 4){
            alert("Fin del Juego, Has Perdido");
            location.reload();
        } 
    }else{
        if (palabraConGuiones.indexOf('_ ') < 0){
            alert("Felicidades, Has ganado");
            location.reload();
        }
    }
    
    
    document.querySelector('#output').innerHTML = palabraConGuiones;
    document.querySelector('#letra').value = '';    
    document.querySelector('#letra').focus();
    
}

/* Validar Solo letras en input */

function soloLetras(e){
    key=e.keyCode || e.which;

    teclado=String.fromCharCode(key).toLowerCase();

    simbolo ="abcdefghijklmnoprqstuvwxyz";

    especiales="8-37-38-46-164";

    tecladoEspecial = false;

    for(let i in especiales){
        if(key == especiales[i]){
            tecladoEspecial=true;
            break;
        }
    }

    if(simbolo.indexOf(teclado)==-1 && !tecladoEspecial){
        return false;
    }

}

/* Mostrar Letras Incorrectas */ 


