window.addEventListener("load", iniciar)

var resultado = ''

function iniciar() {
    let encriptar = document.getElementById("encriptar")
    encriptar.addEventListener('click', encript)

    let desencriptar = document.getElementById("desencriptar")
    desencriptar.addEventListener('click', desencript)

    let copiar = document.getElementById("copiar")
    copiar.addEventListener('click', async (event) => {
        const content = document.getElementById('msn').textContent;
        await navigator.clipboard.writeText(content)
        swal("", "Mensaje copiado", "info");
    })
}

function encript(){
    var txt = document.getElementById('texto').value;
    var msn = document.getElementById('msn');
    var fb = document.getElementById('fb');
    var copy = document.getElementById('copiar');
    var img = document.getElementById('imagen');

    for(let i = 0; i < txt.length; i++){
        if(txt[i] == "a"){
            resultado = resultado + "ai"
        } else if (txt[i] == "e") {
            resultado = resultado + "enter"
        } else if (txt[i] == "i") {
            resultado = resultado + "imes"
        } else if (txt[i] == "o") {
            resultado = resultado + "ober"
        } else if (txt[i] == "u") {
            resultado = resultado + "ufat"
        } 
        else{
            resultado = resultado + txt[i]
        }
    }
    msn.innerHTML = resultado
    msn.style.fontWeight = '400'
    fb.style.display = 'none'
    img.style.display = 'none'
    copy.style.display = 'block'
    swal("", "Mensaje encriptado", "success");
    resultado = ''
}

function desencript(){
    var txt = document.getElementById('texto').value;
    var msn = document.getElementById('msn');
    var fb = document.getElementById('fb');
    var copy = document.getElementById('copiar');
    var img = document.getElementById('imagen');

    for(let i = 0; i < txt.length; i++){
        if(txt[i] == "a"){
            resultado = resultado + "a"
            i = i + 1
        } else if (txt[i] == "e") {
            resultado = resultado + "e"
            i = i + 4
        } else if (txt[i] == "i") {
            resultado = resultado + "i"
            i = i + 3
        } else if (txt[i] == "o") {
            resultado = resultado + "o"
            i = i + 3
        } else if (txt[i] == "u") {
            resultado = resultado + "u"
            i = i + 3
        } 
        else{
            resultado = resultado + txt[i]
        }
    }
    msn.innerHTML = resultado
    msn.style.fontWeight = '400'
    fb.style.display = 'none'
    img.style.display = 'none'
    copy.style.display = 'block'
    swal("", "Mensaje desencriptado", "success");
    resultado = ''
}
