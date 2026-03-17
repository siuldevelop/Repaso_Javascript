//para objetos que contienen una cantidad de elementos, no para valores integer
/*
let palabra = 'JavaScript'

for(let f in palabra){
    document.write(f)
    document.write('<br>')
}
*/

//cuantas vocales tiene la palabra almacenada en la variable 'palabra'?
let palabra = 'muercielago'
let vocal = 0

for (let f in palabra){
    if(palabra[f]=='a'||palabra[f]=='e'||palabra[f]=='i'||
        palabra[f]=='o'||palabra[f]=='u'){
            vocal++
    }
}
document.write('Cantidad de vocales: ', vocal)
