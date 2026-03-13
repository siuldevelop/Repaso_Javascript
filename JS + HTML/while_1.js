
let f = 1
/*
while (f < 20) {
    document.write('Vuelta numero.. ' + f)
    document.write('<br>')
    f ++
}

for ( f= 1; f <= 20;f++){
    document.write(`Vuelta numero ${f}`)
    document.write('<br>')
}

document.write('Fin del bucle FOR')
*/

let suma = 0;
let valor

while (f <= 2){
    valor = parseInt(prompt('INGRESE VALOR'))
    suma = suma + valor 
    f++
}
document.write('La suma es: ', suma, '<br>')
