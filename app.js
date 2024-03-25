//EJERCICIO UNO

const a = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];

function maxNumero(arreglo) {
    let coleccion = {};
    arreglo.forEach(v => {
        coleccion[v] = (coleccion[v] || 0) + 1;
    });
    
    let maxValue = arreglo[0];
    let maxFrecuencia = 0;

    for (let num in coleccion) { 
        if (coleccion[num] > maxFrecuencia) {
            maxFrecuencia = coleccion[num];
            maxValue = num;
        }
    }
    return maxValue;
}

console.log(maxNumero(a), "es el número más repetido"); 

//EJECICIO DOS 

function filtrarLetras(arreglo) {
    // Filtra las letras del arreglo
    let letras = arreglo.filter(item => typeof item === 'string' && item.length === 1);
    return letras;
}


let input = [8, 'e', 7, 2, 'a', 'd', 'f', 2, 3, 1, 4, 3];
console.log(filtrarLetras(input)); // Salida: ['e', 'a', 'd', 'f']

//EJERCICIO TRES 

function encontrarMaximo(arreglo) {
    let maximo = arreglo[0]; 
    
    for (let i = 1; i < arreglo.length; i++) { 
        if (arreglo[i] > maximo) { 
            maximo = arreglo[i]; 
        }
    }
    
    return maximo; 
}
let input = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
console.log(encontrarMaximo(input)); // Salida: 12

 //EJERCICIO CUATRO 

 function encontrarMinimo(arreglo) {
    let minimo = arreglo[0]; 
    
    for (let i = 1; i < arreglo.length; i++) { 
        if (arreglo[i] < minimo) { 
            minimo = arreglo[i]; 
        }
    }
    
    return minimo; 
}


let input = [1, 4, 5, -1, -7, 2, 3, 9];
console.log(encontrarMinimo(input)); // Salida: -7

//EJERCICIO CINCO

class Contacto {
    constructor(nombre, apellidos, telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }
}

class ListaContactos {
    constructor() {
        this.contactos = [];
    }

    agregarContacto(contacto) {
        this.contactos.push(contacto);
    }

    buscarContactoPorNombre(nombre) {
        return this.contactos.find(contacto => contacto.nombre === nombre);
    }
}

// Ejemplo de uso
let lista = new ListaContactos();

// Agregar contactos
lista.agregarContacto(new Contacto("Melissa", "Herrera", "123456789"));
lista.agregarContacto(new Contacto("Miguel", "Ceñal ", "987654321"));
lista.agregarContacto(new Contacto("Yeimy", "Cervantes", "456789123"));

// Buscar contacto por nombre
let contacto = lista.buscarContactoPorNombre("Melissa");
console.log(contacto); // Debería mostrar el contacto de María



