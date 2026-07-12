let edadesIzquierda = [];
let edadesDerecha = [];

function agregarEdad(){
    let edad = recuperarInt("edad");
    edadesIzquierda.push(edad);
    mostrarTextoEnCaja("edad", "");
    pintarArregloIzquierda();
}

function pintarArregloIzquierda(){
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("tablaIzquierda");
    let edad;

    for(let indice = 0; indice < edadesIzquierda.length; indice++){
        edad = edadesIzquierda[indice];
        contenidoTabla += "<tr>";
        contenidoTabla += "<td>" + edad + "</td>";
        contenidoTabla += "<td><button class='btn-eliminar' onclick='eliminarIzquierdo(" + indice + ")'>Eliminar</button></td>";
        contenidoTabla += "<td><button class='btn-mover' onclick='moverHaciaDerecha(" + indice + ")'>➜</button></td>";
        contenidoTabla += "</tr>";
    }
    cmpTabla.innerHTML = contenidoTabla;
}

function eliminarIzquierdo(indice){
    edadesIzquierda.splice(indice, 1);
    pintarArregloIzquierda();
}