// Ejemplo con if...else
function verificarEdad(age) {
    if (age >= 18) {
        return "Eres mayor de edad.";
    } else {
        return "Eres menor de edad.";
    }
}

// Ejemplo de bucle "while" que imprime los números del 1 al 5
let i = 1;
let output = "";

while (i <= 5) {
  output += i + " ";
  i++;
}

window.onload = function() {
  document.getElementById("output").textContent = output;
};
function saludar() {
    let saludo = "¡Hola! Bienvenido.";
    document.getElementById("saludo").textContent = saludo;
  }
  function calcularDescuento() {
    let precio = 100;
    let descuento = 20;
    let precioFinal = precio - (precio * descuento / 100);
    
    document.getElementById("descuento").textContent = "El precio final con descuento es: colones" + precioFinal;
  }
  // ejemplo.js
function calcularRaizCuadrada() {
    let numero = 16;
    let raizCuadrada = Math.sqrt(numero);
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = "La raíz cuadrada de " + numero + " es: " + raizCuadrada;
  }
// ejemplo.js
function formatearTexto() {
    let nombre = "Fer";
    let edad = 20;
    let textoFormateado = `Mi nombre es ${nombre} y tengo ${edad} años.`;
    let textoFormateadoUpperCase = textoFormateado.toUpperCase();
    let textoFormateadoElement = document.getElementById("textoFormateado");
    textoFormateadoElement.textContent = textoFormateadoUpperCase;
  }
  // ejemplo.js
function mostrarArreglo() {
    let numeros = [1, 2, 3, 4, 5];
    let arregloElement = document.getElementById("arreglo");
    arregloElement.textContent = numeros.toString();
  }

  function mostrarMensaje() {
    var mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.textContent = "¡Hola, bienvenido!";
  }
  function encontrarElementoPorId() {
    var resultado = document.getElementById("resultado");
    var elemento = document.getElementById("dom");
    resultado.textContent = "Elemento encontrado: " + elemento.textContent;
  } 
  
  
  
  
    
  
