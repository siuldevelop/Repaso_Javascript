const fechaActual = new Date()

document.write(fechaActual, '<br>')

let fecha = new Date()
document.write('Hoy es: ', fecha.getDay(), '<br>')
document.write('El mes es: ' ,fecha.getMonth()+1, '<br>') // inicia desde '0' entonces se le suma +1
document.write('El año es: ', fecha.getFullYear(), '<br>')
document.write('La hora es: ', fecha.getHours(),':',fecha.getMinutes(),':', fecha.getSeconds(), '<br>')
