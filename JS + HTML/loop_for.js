/*
for (let f =1 ; f <= 20; f++){
    if (f===15){
        document.write('Aquí el valor es: ',f)
        document.write('<br')
        break
    }
} 
*/

const frutas = ['manzanas', 'peras', 'uvas', 'naranja']

for (let f=0; f < frutas.length; f++){
    document.write('Fruta: ',f, ' = ', frutas[f])
    document.write('<br>')
}
