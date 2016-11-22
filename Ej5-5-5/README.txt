Utilizando la función creada en el ejercicio “Función que cambia un elemento HTML” (ejercicio 5.5.4), escribir una función que realice una suma.
Para ello, partimos de una página HTML que tenga el siguiente código:

    <p>Adder...<span id=’op’>5+3</span>
    <span id="res"></span> <a href="">Add!</a></p>

El objetivo es que cuando se pulse sobre “Add!” aparezca a continuación de “5+3” la cadena “=8” (siendo 8 la suma de los dos operandos).
Para ello la función a escribir aceptará como parámetros dos cadena de texto, que serán el identificador del elemento HTML donde está la operación, y el del elemento donde se escribirá el resultado.
Se considera que la operación estará siempre en formato “primer número, +, segundo número”.
La función tendrá que buscar la operación, identificar los operandos en ella (por ejemplo, usando “split”), realizar la suma y, utilizando la función de cambio de un elemento HTML, escribir el contenido en el elemento HTML del resultado.
Resolver el problema incluyendo todo lo necesario en una página HTML.
