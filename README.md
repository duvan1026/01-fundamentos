# 01-fundamentos

Primera carpeta creada  del curso javascript de Udemy del instructor Fernando Herrera.

Javascript es un lenguaje Interpretado. 

## Polyfills

Es un código que provee el funcionamiento de una nueva característica de JavaScript(ES6), en versiones viejas como ES5.

## Variable

Es un contenedor de información que apunta a un lugar en memoria. Dicha información puede cambiar en el futuro.

### Tipos de variables

Las variables se inicializar y declarar de 3 principales formas: 

* **let** 

   Permite manejar valores variables, sin importar su tipo de dato, es soportada por la gran mayoria de navegadores, No sobrescribe las variables que se encuentran en el objeto global window o del bloque donde este corriendo JavaScript.
* **const**


   Permite manejar valores constates, sin importar el tipo de datos,las constantes no tienen propiedades para esteblecer o cambiar el valor, lo cual las hace mas ligera que otro tipo de variable como lo son let o var, No sobrescribe las variables que se encuentran en el objeto global window o del bloque donde este corriendo JavaScript.
* **var** (No es una buena practica)

   Permite manejar valores variables, sin importar su tipo de dato, al utilizarlo, el dato almacenando se guarda en un objeto global llamado window, lo cual es un problema porque permite reemplazar propiedades y objetos propios del mismo.

   **Nota:** Se recomienda utilizarlo solo si se esta trabajando con navegadores web muy antiguos( inferiores o iguales a versiones del 2015), para asi aumentar la compatibilida.

Las variables **var** en JavaScript se define **Undefined** si esta no ha sido previamente declarada, es decir, JavaScript realiza un scaneo rapido del codigo e identifica que ha pesar de que la variable este declarada pero se esta implementando antes de su declaración la definira de ese modo, de otro modo, declarando la variable tipo **let** o **const**, dara como resultado un error de tipo **No ha sido declarada previamente dicha varible**, dando a entender que no es posible utilizar la variable antes de ser inicializada. 

### Tipos de datos de una variable.

**JavaScript** es un lenguaje de programación que funciona a partir de variables. Estas variables se clasifican mediante tipos. Entonces, en JavaScript, tenemos los tipos primitivos y los tipos no primitivos.

#### Datos primitivos: Los tipos primitivos en JavaScript son aquellos valores que no son un objeto y tampoco tienen métodos. Además, **los tipos primitivos son valores inmutables (no se pueden modificar)**.

Existen varios tipos de datos primitivos, los cuales son:

* Boolean: Los tipos primitivos en JavaScript booleanos son todos aquellos valores que se representan en términos de **verdadero y falso (true/false)**. 

* Null: El tipo primitivo null quiere decir que tenemos un **valor nulo** y sin valor en lo absoluto.

* Undefined: El tipo primitivo undefined es una manera de representar la ausencia de un valor. **undefined quiere decir que tenemos un valor indefinido**. En pocas palabras un valor undefined es una variable declarada que aún no se le asigna valor.

* number: El tipo primitivo number se refiere a **todos los valores que representan un número**. Estos valores pueden ser números enteros, como lo sería 3, o números racionales, como lo sería 3.1416, lo cual indica que para JavaScript no hay diferencia entre los enteros, los flotantes, etc, considerandolos casi igual.

* String: Un string también se conoce en programación como una cadena de caracteres. **Los string son muy útiles para almacenar datos que se representan en forma de texto**. En pocas palabras un **String es una cadena de caracteres**.

* Symbol: Es un valor único que no es igual a ningún otro valor.


## Breakpoints (puntos de interrupción)

Un breakpoint es un punto de código donde el debugger pausará automáticamente la ejecución de JavaScript.

Mientras se pausa el código, podemos examinar las variables actuales, ejecutar comandos en la consola, etc. En otras palabras, podemos depurar.

![Esta es una imagen de ejemplo](https://es.javascript.info/article/debugging-chrome/chrome-sources-breakpoint.svg)

Siempre podemos encontrar una lista de los breakpoints en el panel derecho. Esto es muy útil cuando tenemos muchos breakpoints en varios archivos. Ya que nos permite:

* Saltar rápidamente al breakpoint en el código (haciendo click en él dentro del panel).
* Desactivar temporalmente el breakpoint desmarcándolo.
* Eliminar el breakpoint haciendo click derecho y seleccionando quitar/eliminar/remove.
* …y mucho más.

### Tipos de instrucciones para imprimir en consola.

* **console.log()**  :  Permite Imprimir un mensaje en la consola.
* **console.warn()** :  Permite Imprimir un warning en consola.
* **console.error()**: Permite Imprimir un mensaje de error.
* **console.table({ });**: Permite Imprimir un objeto dinamico en consola.

## Tipos de formas de ingreso de información del usuario.

Las siguientes instrucciones son bloqueantes, es decir bloquean al navegador web hasta que se reciba una accion por parte del usuario, cabe resaltar que estas instrucciones pueden manejar mediante librerias que mejoran su aspecto visual.

Estos instrucciones son metodos que vienen dentro del objeto window, es decir si se corre en otro lugar que no sea el navegador web o que no contenga la instancia de window no va a funcionar.

* **alert** ( alert(message) ): su finalidad es la de mostrar por pantalla mensajes de alerta encuadrados en una pequeña ventana modal.
* **prompt** ( prompt(message, default) ); Determina si el usuario ha clickado en ‘Aceptar’, ‘Cancelar’ o si hay metido texto en dicha ventana modal, retorna el texto que el usuario escriba en él.
* **confirm** ( confirm(message) ): Nos ayuda a determinar si el usuario ha clickado en ‘Aceptar’, ‘Cancelar’.




## Recomendaciones:

* Para poder ejecutar un archivo en especifico se debe navegar en la terminal de comando dentro d ela carpeta donde se encuentra alojado el archivo y agregar el siguiente comando:

    ```
    **node** "nombre del archivo"
    ```

* Para el llamado de archivos javascript en archivos html, se recomiendo realizarlo de la siguiente manera:
    
    ```
    <script src="**nombre del archivo**"></script>
    ```

    Se reconoce como una mala practica la implementación de archivos javascript en html de la siguiente manera.

    ```
    <script type="text/javascript">   
        console.log("Hola Mundo en Html");
    </script>
    ```

  Posterior a ello, se deben colocar al final del archivo html y asi evitando que al ejecutarse el archivo se genere algun bloquee o demora en la ejecución del mismo.




## Importante.

Quedamos iniciando el video 14 del curso JavaScript Moderno; Guía para  dominar el lenguaje; del curso de Udemy del instructor Fernando Herrera.

