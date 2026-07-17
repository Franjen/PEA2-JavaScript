# 💻 PEA 2 - Sistema de Cotización de Computadoras

## 📌 Descripción del proyecto

Este proyecto corresponde a la actividad práctica de la **Unidad 2: Lenguaje Interpretado**.

Se desarrolló un sitio web interactivo utilizando **HTML5, CSS3, JavaScript y jQuery**, cuyo objetivo es resolver un problema práctico mediante la creación de un sistema de cotización de computadoras.

La aplicación permite al usuario ingresar sus datos, seleccionar componentes tecnológicos y obtener automáticamente el valor total de una cotización aplicando cálculos, impuestos y descuentos.

Además, incorpora la generación de un documento PDF profesional con los datos de la cotización, nombre del cliente y logo del sistema.

---

# 🚀 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6
- jQuery
- Librería jsPDF
- jsPDF AutoTable
- Git y GitHub

---

# 🎯 Objetivo del proyecto

Aplicar los fundamentos de los lenguajes interpretados mediante JavaScript, utilizando:

- Sintaxis básica.
- Variables.
- Tipos de datos.
- Funciones.
- Sentencias de control.
- Manipulación del DOM.
- Eventos con jQuery.

Todo integrado dentro de un sitio web funcional desarrollado con HTML5 y CSS.

---

# ✨ Funcionalidades principales

## 👤 Registro del cliente

Permite ingresar:

- Nombre del cliente.
- Componentes seleccionados.
- Cantidad de equipos.

---

## 🖥️ Selección de componentes

El usuario puede seleccionar:

### Procesador

- Intel Core i3.
- Intel Core i5.
- Intel Core i7.

### Memoria RAM

- 8 GB.
- 16 GB.
- 32 GB.

### Disco SSD

- 256 GB.
- 512 GB.
- 1 TB.

---

# 🧮 Sistema de cálculo automático

La aplicación calcula:

- Precio de componentes.
- Cantidad de equipos.
- Subtotal.
- Descuento automático.
- IVA.
- Total final.

---

# 📄 Generación de cotización PDF

El sistema permite generar una cotización profesional en formato PDF.

Características:

✅ Nombre personalizado del archivo.

Ejemplo:

```
Cotizacion_Francisco_Zamora.pdf
```

Incluye:

- Logo de la página.
- Nombre del sistema.
- Datos del cliente.
- Fecha de emisión.
- Tabla de productos.
- Subtotal.
- Descuento.
- IVA.
- Total final.
- Mensaje de agradecimiento.

---

# 📚 Conceptos de JavaScript aplicados

Durante el desarrollo se implementaron:

## Variables

Uso de:

- let
- const

Ejemplo:

```javascript
let total = 0;
```

---

## Tipos de datos

Se utilizaron:

- String.
- Number.
- Boolean.
- Array.
- Object.

---

## Funciones

Implementación de:

- Funciones tradicionales.
- Funciones con parámetros.
- Funciones con valores de retorno.
- Funciones flecha.
- Funciones anónimas.

Ejemplo:

```javascript
const calcularIVA = (valor)=>{

return valor * 0.15;

};
```

---

# 🔄 Sentencias de control utilizadas

## Condicionales

Uso de:

- if.
- else.
- switch.

Ejemplo:

```javascript
if(total >= 1200){

descuento = total * 0.10;

}
```

---

## Ciclos

Implementación de:

- for.
- while.

Ejemplo:

```javascript
for(let i=0;i<componentes.length;i++){

}
```

---

# 🌐 Uso de jQuery

Se implementó jQuery para:

- Capturar eventos.
- Manipular elementos del DOM.
- Mostrar resultados dinámicos.
- Aplicar efectos visuales.

Ejemplos:

```javascript
$("#calcular").click(function(){

calcularCotizacion();

});
```

Efectos utilizados:

- fadeIn()
- slideDown()

---

# 📂 Estructura del proyecto

```
PEA2-JavaScript
│
├── index.html
│
├── css
│   └── styles.css
│
├── js
│   └── script.js
│
├── img
│   └── logo.png
│
├── README.md
│
└── .gitignore
```

---

# 🎨 Diseño del sitio web

El sistema cuenta con:

- Diseño responsive.
- Tarjetas de contenido.
- Formulario interactivo.
- Botones personalizados.
- Presentación visual moderna.

---

# 🛠️ Instalación y ejecución

## 1. Descargar el repositorio

```bash
git clone https://github.com/Franjen/PEA2-JavaScript.git
```

---

## 2. Abrir el proyecto

Abrir la carpeta en:

```
Visual Studio Code
```

---

## 3. Ejecutar

Abrir:

```
index.html
```

utilizando:

```
Live Server
```

---

# 📌 Repositorio

Proyecto disponible en GitHub:

```
https://github.com/Franjen/PEA2-JavaScript
```

---

# 👨‍💻 Autor

**Francisco Ismael Zamora Toaza**

Carrera:

**Desarrollo de Software**

Instituto Superior Universitario Almirante Illingworth (AITEC)

Año:

**2026**

---

# ✅ Conclusión

El desarrollo de este proyecto permitió aplicar los fundamentos del lenguaje JavaScript como lenguaje interpretado, integrándolo con HTML5, CSS y jQuery para crear una solución web dinámica.

Además, se fortalecieron conocimientos sobre lógica de programación, manipulación del DOM, eventos, generación de documentos PDF y publicación de proyectos mediante GitHub.