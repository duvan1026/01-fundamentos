


const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while( i < carros.length ) {
//     console.log( carros[i] );
//     i++;
// }

// Condiciones falas que no permiten entrar en un while
// undefined
// null
// false
// console.log( carros[10] );
while( carros[i]) {

    if ( i === 1 ){
        // break;
        i++;
        continue;
    }
    console.log( carros[i] );
    i++;
}