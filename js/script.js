/*
|--------------------------------------------------------------------------
| PEA 2 - Sistema de Cotización de Computadoras
|--------------------------------------------------------------------------
|
| Este programa utiliza:
|
| ✔ Variables
| ✔ Tipos de datos
| ✔ Arreglos
| ✔ Funciones
| ✔ Parámetros
| ✔ Valores de retorno
| ✔ Funciones flecha
| ✔ Funciones anónimas
| ✔ Llamadas entre funciones
| ✔ if
| ✔ switch
| ✔ for
| ✔ while
| ✔ JavaScript
| ✔ jQuery
| ✔ DOM
|
|--------------------------------------------------------------------------
*/

// ============================
// Variables globales
// ============================

const IVA = 0.15;

let subtotal = 0;

let iva = 0;

let descuento = 0;

let total = 0;

let datosCotizacion = {

    cliente: "",

    procesador: "",

    ram: "",

    ssd: "",

    cantidad: 0,

    subtotal: 0,

    descuento: 0,

    iva: 0,

    total: 0

};


// ============================
// Arreglo de componentes
// ============================

const componentes = [

    "Procesador",

    "Memoria RAM",

    "Disco SSD"

];


// ============================
// Función con parámetro
// Retorna precio del procesador
// ============================

function obtenerPrecioProcesador(tipo) {

    switch (tipo) {

        case "i3":
            return 350;

        case "i5":
            return 550;

        case "i7":
            return 850;

        default:
            return 0;

    }

}


// ============================
// Función con parámetro
// ============================

function obtenerPrecioRAM(memoria) {

    switch (memoria) {

        case "8":
            return 80;

        case "16":
            return 150;

        case "32":
            return 280;

        default:
            return 0;

    }

}


// ============================
// Función con parámetro
// ============================

function obtenerPrecioSSD(ssd) {

    switch (ssd) {

        case "256":
            return 70;

        case "512":
            return 120;

        case "1024":
            return 220;

        default:
            return 0;

    }

}


// ============================
// Función flecha
// ============================

const calcularIVA = (valor) => {

    return valor * IVA;

};


// ============================
// Función de descuento
// ============================

function calcularDescuento(valor) {

    if (valor >= 1200) {

        return valor * 0.10;

    }

    return 0;

}


// ============================
// Función anónima
// ============================

const mensajeBienvenida = function () {

    console.log("Sistema iniciado correctamente.");

};

mensajeBienvenida();


// ============================
// Función para validar
// ============================

function validarFormulario() {

    let nombre = $("#nombre").val();

    let procesador = $("#procesador").val();

    let ram = $("#ram").val();

    let ssd = $("#ssd").val();

    if (nombre == "") {

        alert("Ingrese el nombre.");

        return false;

    }

    if (procesador == "") {

        alert("Seleccione un procesador.");

        return false;

    }

    if (ram == "") {

        alert("Seleccione una memoria RAM.");

        return false;

    }

    if (ssd == "") {

        alert("Seleccione un disco SSD.");

        return false;

    }

    return true;

}


// ============================
// Función principal
// ============================

function calcularCotizacion() {

    if (!validarFormulario()) {

        return;

    }

    let nombre = $("#nombre").val();

    let procesador = $("#procesador").val();

    let ram = $("#ram").val();

    let ssd = $("#ssd").val();

    let cantidad = parseInt($("#cantidad").val());

    let precioProcesador = obtenerPrecioProcesador(procesador);

    let precioRAM = obtenerPrecioRAM(ram);

    let precioSSD = obtenerPrecioSSD(ssd);

    subtotal = (precioProcesador + precioRAM + precioSSD) * cantidad;

    descuento = calcularDescuento(subtotal);

    iva = calcularIVA(subtotal - descuento);

    total = subtotal - descuento + iva;

    datosCotizacion = {

        cliente: nombre,

        procesador: procesador,

        ram: ram,

        ssd: ssd,

        cantidad: cantidad,

        subtotal: subtotal,

        descuento: descuento,

        iva: iva,

        total: total

    };

    mostrarResultado(

        nombre,

        procesador,

        ram,

        ssd,

        cantidad

    );

}

//
// Función que llama otra función
//

function mostrarResultado(

    nombre,

    procesador,

    ram,

    ssd,

    cantidad

) {

    let lista = "<ul>";

    for (let i = 0; i < componentes.length; i++) {

        lista += "<li>" + componentes[i] + "</li>";

    }

    lista += "</ul>";

    let contador = 0;

    while (contador < 1) {

        contador++;

    }

    $("#resultado").hide();

    $("#resultado").html(

        "<h3>Cliente: " + nombre + "</h3>" +

        "<hr>" +

        "<p><strong>Procesador:</strong> " + procesador.toUpperCase() + "</p>" +

        "<p><strong>RAM:</strong> " + ram + " GB</p>" +

        "<p><strong>SSD:</strong> " + ssd + " GB</p>" +

        "<p><strong>Cantidad:</strong> " + cantidad + "</p>" +

        "<hr>" +

        "<p><strong>Subtotal:</strong> $" + subtotal.toFixed(2) + "</p>" +

        "<p><strong>Descuento:</strong> $" + descuento.toFixed(2) + "</p>" +

        "<p><strong>IVA:</strong> $" + iva.toFixed(2) + "</p>" +

        "<h2>Total: $" + total.toFixed(2) + "</h2>" +

        "<hr>" +

        "<h3>Componentes seleccionados</h3>" +

        lista

    );

    $("#resultado").fadeIn(800);

}


// ============================
// Evento jQuery
// ============================

$(document).ready(function () {

    $("#calcular").click(function () {

        calcularCotizacion();

    });

    $("#limpiar").click(function () {

        $("#formulario")[0].reset();

        $("#resultado").html("Aquí aparecerá la cotización.");

    });

    let fecha = new Date();

    $("#fecha").text(

        "Fecha: " +

        fecha.toLocaleDateString() +

        " " +

        fecha.toLocaleTimeString()

    );

    $("#bienvenida")

        .html("Bienvenido al Sistema de Cotización de Computadoras.")

        .slideDown(1000);

});

function generarPDF() {


    const { jsPDF } = window.jspdf;


    let pdf = new jsPDF();



    let cliente = datosCotizacion.cliente;



    if (cliente == "") {


        alert("Primero genere una cotización");


        return;


    }


    // Logo

    let logo = "img/logo.png";


    pdf.addImage(

        logo,

        "PNG",

        15,

        10,

        30,

        30

    );



    // Encabezado


    pdf.setFontSize(18);


    pdf.text(

        "Sistema de Cotización",

        60,

        25

    );



    pdf.setFontSize(12);


    pdf.text(

        "Comprobante de cotización",

        60,

        32

    );



    pdf.line(

        15,

        45,

        195,

        45

    );



    // Datos cliente


    pdf.setFontSize(13);


    pdf.text(

        "Cliente: " + cliente,

        15,

        60

    );


    pdf.text(

        "Fecha: " + new Date().toLocaleDateString(),

        15,

        70

    );



    // Tabla


    pdf.autoTable({

        startY: 85,


        head: [

            [

                "Descripción",

                "Valor"

            ]

        ],


        body: [


            [
                "Procesador " + datosCotizacion.procesador,

                datosCotizacion.procesador

            ],


            [
                "Memoria RAM " + datosCotizacion.ram + "GB",

                datosCotizacion.ram

            ],


            [
                "Disco SSD " + datosCotizacion.ssd + "GB",

                datosCotizacion.ssd

            ],


            [

                "Cantidad",

                datosCotizacion.cantidad

            ],


            [

                "Subtotal",

                "$ " + datosCotizacion.subtotal.toFixed(2)

            ],


            [

                "Descuento",

                "$ " + datosCotizacion.descuento.toFixed(2)

            ],


            [

                "IVA",

                "$ " + datosCotizacion.iva.toFixed(2)

            ]


        ]

    });



    // Total


    let posicion =

        pdf.lastAutoTable.finalY + 15;



    pdf.setFontSize(18);


    pdf.text(

        "TOTAL: $" + datosCotizacion.total.toFixed(2),

        15,

        posicion

    );



    // Pie


    pdf.setFontSize(10);


    pdf.text(

        "Gracias por preferir nuestro servicio",

        15,

        posicion + 20

    );



    // Nombre archivo


    let nombreArchivo =

        "Cotizacion_" +

        cliente.replaceAll(" ", "_")

        +

        ".pdf";



    pdf.save(nombreArchivo);


}

$("#pdf").click(function () {


    generarPDF();


});