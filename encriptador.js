let palabra = prompt('Dame una palabra/frase')
var resultado = ''

function desencriptar(){
    for(let i = 0; i < palabra.length; i++){
        if(palabra[i] == "a"){
            resultado = resultado + "a"
            i = i + 1
        } else if (palabra[i] == "e") {
            resultado = resultado + "e"
            i = i + 4
        } else if (palabra[i] == "i") {
            resultado = resultado + "i"
            i = i + 3
        } else if (palabra[i] == "o") {
            resultado = resultado + "o"
            i = i + 3
        } else if (palabra[i] == "u") {
            resultado = resultado + "u"
            i = i + 3
        } 
        else{
            resultado = resultado + palabra[i]
        }
    }
    
    console.log('tu palabra/frase encriptada es ' + resultado)
}

function encriptar(){
    for(let i = 0; i < palabra.length; i++){
        if(palabra[i] == "a"){
            resultado = resultado + "ai"
        } else if (palabra[i] == "e") {
            resultado = resultado + "enter"
        } else if (palabra[i] == "i") {
            resultado = resultado + "imes"
        } else if (palabra[i] == "o") {
            resultado = resultado + "ober"
        } else if (palabra[i] == "u") {
            resultado = resultado + "ufat"
        } 
        else{
            resultado = resultado + palabra[i]
        }
    }
    
    console.log('tu palabra/frase encriptada es' + resultado)
}