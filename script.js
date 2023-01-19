window.addEventListener("load", iniciar)

let resultado = ''

function iniciar() {
    let encriptar = document.getElementById("encriptar")
    encriptar.addEventListener('click', obtenerTexto)

    let desencriptar = document.getElementById("desencriptar")
    desencriptar.addEventListener('click', desencript)

    let copiar = document.getElementById("copiar")
    copiar.addEventListener('click', async (event) => {
        const content = document.getElementById('msn').textContent;
        await navigator.clipboard.writeText(content)
        swal("", "Mensaje copiado", "info");
    })
}

function obtenerTexto(){
    var txt = document.getElementById('texto').value;
    return validar(txt) ? encript(txt): swal("Error", "Solo puedes utilizar letras minúsculas sin acentos", "error");
}

function validar(text) {
    return text ? !/[^a-z\sñ]/.test(text) : true;
}

function encript(txt){
    let msn = document.getElementById('msn');
    let fb = document.getElementById('fb');
    let copy = document.getElementById('copiar');
    let img = document.getElementById('imagen');

    for(let i = 0; i < txt.length; i++){
        switch (txt[i]) {
            case 'a':
                resultado = resultado + "ai"
                break;
            case 'e':
                resultado = resultado + "enter"
                break;
            case 'i':
                resultado = resultado + "imes"
                break;
            case 'o':
                resultado = resultado + "ober"
                break;
            case 'u':
                resultado = resultado + "ufat"
                break;
            default:
                resultado = resultado + txt[i]
                break;
        }
    }
    msn.innerHTML = resultado;
    msn.style.fontWeight = '400'
    fb.style.display = 'none'
    img.style.display = 'none'
    copy.style.display = 'block'
    swal("", "Mensaje encriptado", "success");
    resultado = ''
}

function desencript(){
    let txt = document.getElementById('texto').value;
    let msn = document.getElementById('msn');
    let fb = document.getElementById('fb');
    let copy = document.getElementById('copiar');
    let img = document.getElementById('imagen');
    const a = 1;
    const b = 4;
    const c = 3;
    

    for(let i = 0; i < txt.length; i++){
        switch (txt[i]) {
            case 'a':
                resultado = resultado + "a"
                i = i + a;
                break;
            case 'e':
                resultado = resultado + "e"
                i = i + b;
                break;
            case 'i':
                resultado = resultado + "i"
                i = i + c;
                break;
            case 'o':
                resultado = resultado + "o"
                i = i + c;
                break;
            case 'u':
                resultado = resultado + "u"
                i = i + c;
                break;
            default:
                resultado = resultado + txt[i]
                break;
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