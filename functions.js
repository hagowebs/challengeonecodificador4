'use strict';

function verificar() {
    // paso 1: obtener valor del texto
    var verificar = texto.value;
    // paso 2: comprobar si el valor es distinto a vacio
    if (verificar != '') {
        // paso 3: ocultar div sin mensaje y mostrar div con mensaje
        document.querySelector('#sinMensaje').style.display = 'none';
        document.querySelector('#conMensaje').style.display = 'block';
    } else {
        // paso 4: mostrar div sin mensaje y ocultar div con mensaje
        document.querySelector('#sinMensaje').style.display = 'block';
        document.querySelector('#conMensaje').style.display = 'none';
    }
}

function filtrar() {
    // paso 1: obtener valor del texto
    var filtrar = texto.value;
    // paso 2: convertir a minusculas
    filtrar = filtrar.toLowerCase();
    // paso 2: quitar acentos
    var llaves = [/í/g,/é/g,/á/g,/ó/g,/ú/g];
    var letras = ['i','e','a','o','u'];
    for (var i=0;i<llaves.length;i++){
        filtrar = filtrar.replace(llaves[i],letras[i]);
        filtrar = filtrar;
    }
    // paso 4: devolver valor del texto filtrado
    document.querySelector('#texto').value = filtrar;
}

function encriptar() {
    // paso 1: verificar texto
    verificar();
    // paso 2: filtrar texto
    filtrar();
    // paso 3: encriptar texto (uno a uno)
    var encriptar = texto.value;
    encriptar = encriptar.replace(/e/g,'enter');
    encriptar = encriptar.replace(/i/g,'imes');
    encriptar = encriptar.replace(/a/g,'ai');
    encriptar = encriptar.replace(/o/g,'ober');
    encriptar = encriptar.replace(/u/g,'ufat');
    // paso 4: devolver valor del mensaje encriptado
    document.querySelector('#mensaje').value = encriptar;
}

function desencriptar() {
    // paso 1: verificar texto
    verificar();
    // paso 2: filtrar texto
    filtrar();
    // paso 3: desencriptar texto (con array y for)
    var desencriptar = texto.value;
    var llaves = [/imes/g,/enter/g,/ai/g,/ober/g,/ufat/g];
    var letras = ['i','e','a','o','u'];
    for (var i=0;i<llaves.length;i++){
        desencriptar = desencriptar.replace(llaves[i],letras[i]);
    }
    // paso 4: devolver valor del mensaje desencriptado
    document.querySelector('#mensaje').value = desencriptar;
}

function copiar() {
    // paso 1: seleccionar mensaje
    mensaje.select();
    // paso 2: seleccionar mensaje en celular
    mensaje.setSelectionRange(0, 99999);
    // paso 3: copiar mensaje al portapapeles
    navigator.clipboard.writeText(mensaje.value);
}