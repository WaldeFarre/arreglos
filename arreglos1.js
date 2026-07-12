let edadesIzquierda = [];
let edadesDerecha = [];

function agregarEdad(){
    let edad = recuperarInt("edad");
    edadesIzquierda.push(edad);
    mostrarTextoEnCaja("edad", "");
    pintarArregloIzquierda();
}
