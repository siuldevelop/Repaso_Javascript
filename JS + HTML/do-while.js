/*
let valor

do {
    valor = parseInt(prompt('Ingrese valor 1 para salir...'))
    document.write('Ingresó valor: ', valor)
    document.write('<br>')
} while (valor != 1)
document.write('<br>')
document.write('Fin del bucle')
*/

//ej 2

let usuario, clave, control, intentos

control = 0
intentos = 0  // contador de intentos fallidos
usuario = prompt('Ingrese Usuario...')
clave = prompt('Ingrese su Contraseña...')

do {
    if(usuario != 'siuldev') {
        intentos++
        if (intentos >= 3) {
            document.write('ACCESO BLOQUEADO - Demasiados intentos fallidos')
            break  // frena el bucle
        }
        usuario = prompt('USUARIO NO REGISTRADO\n'+
                        'INGRESE DE NUEVO... (intento ' + intentos + ' de 3)')
        control=0
    }else if(clave!= 'myPass00') {
        clave = prompt('CONTRASEÑA INCORRECTA\n'+
                        'INGRESE DE NUEVO...')
        control = 0
    }else {
        control = 1
    }
} while (control != 1);

if(control === 1){
    document.write('<br>')
    document.write(`ACCESO CORRECTO! - Bienvenido ${usuario}`)
}