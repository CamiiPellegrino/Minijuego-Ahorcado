let btnInicio = document.getElementById("btnInicio")
let botonesLetras = document.getElementsByClassName("btnLetra")
let n = botonesLetras.length

//Palabras
let hola = ["H", "O", "L", "A"];
let chau = ["C", "H", "A", "U"]; 
let buenas = ["B", "U", "E", "N", "A", "S"];
let ribonucleotido = ["R","I","B","O","N","U","C","L","E","I","O","T", "I", "D", "O"];
let oviparo = ["O", "V", "I", "P", "A", "R", "O"];
let espinaca = ["E", "S", "P", "I", "N", "A", "C", "A"];
let tomate = ["T", "O", "M", "A", "T", "E"];
let libro = ["L", "I", "B", "R", "O"];
let selfie = ["S", "E", "L", "F", "I", "E"];
let barista = ["B", "A", "R", "I", "S", "T", "A"];
let lapiz = ["L", "A", "P", "I", "Z"];
let mozart = ["M", "O", "Z", "A", "R", "T"];
let catedral = ["C", "A", "T", "E", "D", "R", "A", "L"];
let vigilia = ["V", "I", "G", "I", "L", "I", "A"];
let reina = ["R", "E", "I", "N", "A"];
let estomacal = ["E", "S", "T", "O", "M", "A", "C", "A", "L"];
let falange = ["F", "A", "L", "A", "N", "G", "E"];
let cartucho = ["C", "A", "R", "T", "U", "C", "H", "O"];
let motor = ["M", "O", "T", "O", "R"];
let papel = ["P", "A", "P", "E", "L"];
let funda = ["F", "U", "N", "D", "A"]
let arbol = ["A", "R", "B", "O", "L"]
let parque = ["P", "A", "R", "Q", "U", "E"]
let estante = ["E", "S", "T", "A", "N", "T", "E"];
let hormiga = ["H", "O", "R", "M", "I", "G", "A"];
let pequeño = ["P", "E", "Q", "U", "E", "Ñ", "O"];
let mickey = ["M", "I", "C", "K", "E", "Y"]
let pentagrama = ["P", "E", "N", "T", "A", "G", "R", "A", "M", "A"];
let gaznapiro = ["G", "A", "N", "A", "P", "I", "R", "O"];
let rococo = ["R", "O", "C", "O", "C", "O"];
let esfinge = ["E", "S", "F", "I", "N", "G", "E"];
let mapache = ["M", "A", "P", "A", "C", "H", "E"];
let hijitus = ["H", "I", "J", "I", "T", "U", "S"];
let pitagoras = ["P", "I", "T", "A","G", "O", "R", "A", "S"];
let pokemon = ["P", "O", "K","E", "M", "O", "N"];
let mafalda = ["M", "A", "F", "A", "L", "D", "A"];
let luigi = ["L", "U", "I", "G", "I"];
let correcaminos = ["C", "O", "R", "R", "E", "C", "A", "M", "I", "N", "O", "S"];


let palabras = [hola, chau, buenas, ribonucleotido, oviparo, espinaca, tomate, libro, selfie, barista, lapiz, mozart, catedral, vigilia, reina, falange, cartucho, motor, papel, funda, arbol, parque, estante, hormiga, pequeño, mickey, pentagrama, gaznapiro, rococo, esfinge, mapache, hijitus, pitagoras, pokemon, mafalda, luigi, correcaminos];
let palabra = " ";
let marcador = document.getElementById("marcador");
let numeroMarcador = 5;

//ejecuta
btnInicio.addEventListener("click",function(evt){
    principalInicio()
},false)

        for(i = 0;i < n;i++){
            botonesLetras[i].addEventListener("click",function(evt){
                clickLetras(evt)
            },false)
        }

//funciones para el boton de INICIO
function generarPalabraRandom(){
    let random = Math.trunc(Math.random()*palabras.length)
    return palabras[random]
}

function cantidadDeLetras(palabra){
    return palabra.length
}

function generarCasilleros(letras){
    let id = 0;
    let div;
    for(i=0; i<letras; i++){
        div = document.createElement("div")
        div.innerHTML = "_"
        div.classList.add("divLetras")
        contenedor.appendChild(div)
        div.setAttribute("id", id)
        id = id + 1
    }
}

function principalInicio(){
    contenedor.innerHTML = " ";
    numeroMarcador = 5;
    marcador.innerHTML = "Le quedan " + numeroMarcador + "vidas";
    palabra = generarPalabraRandom();
    let letras = cantidadDeLetras(palabra);
    generarCasilleros(letras);
    
    return palabra;
}

//funciones para los botones de LETRAS



function clickLetras(evt){
    if(numeroMarcador>=1 && numeroMarcador <=5){
    let letra = evt.path[0].innerHTML;
    let flag = false;
    for(i=0; i<palabra.length; i++){
        if(palabra[i] == letra){
            document.getElementById(i).innerHTML = letra;
            flag = true;
        }
    }
    
    if(flag == false){
        
            if(numeroMarcador>1){
                numeroMarcador = numeroMarcador - 1;
                marcador.innerHTML = "le quedan " + numeroMarcador + "vidas";
            }else if(numeroMarcador <= 1){
                let palabraCompleta = " ";
                for(i = 0; i<palabra.length; i++){
                    palabraCompleta = palabraCompleta + palabra[i];
                }
                marcador.innerHTML = "has PERDIDO :( " + "La palabra era " + palabraCompleta;
                numeroMarcador = 6;

            }
        
    }
}
    partidaGanada()
}




//funciones ganador
function validarFlag2(){
    divLetras = document.getElementsByClassName("divLetras")
    flag2 = true;
    
    for(i=0; i<divLetras.length; i++){
        let div = document.getElementById(i).innerHTML;
        if(div == "_"){
                flag2 = false;
                break;
            } else if(div !=="_")
            flag2 = true
        }
    return flag2;
    
}

function partidaGanada(){
    validarFlag2();
    if(flag2 == true){
        marcador.innerHTML = "ganaste!! Toca el boton de inicio para volver a jugar";
        numeroMarcador = 6;
    }
}