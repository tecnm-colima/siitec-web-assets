ITColima: Web UI Assets
=======================================

El repositorio contiene los elementos básicos para el diseño de interfaces de
usuario web de las aplicaciones del Instituto Tecnológico de Colima.
Particularmente las que se integran con el Sistema Integrador de Información
del Tecnológico de Colima (SIITEC 2).

Compilación
---------------------------------------

El contenido del actual repositorio se encuentra como código fuente, y para ser
utilizado se requiere compilación.

La compilación se realiza mediante paquetes `npm` por lo que se requiere la
instalación y configuración de [Node JS](https://nodejs.org/es/download/).

Una vez instalado **Node JS** se deben instalar los paquetes correspondientes 
utilizando el siguiente comando. (requiere conexión a Internet).
```
npm install
```

Cuando concluya satisfactoriamente la instalación, se realiza la compilación
utilizando el siguiente comando:
```
npm run build
```

La compilación agregará un directorio "dist" en el respositorio que contiene
los archivos resultantes de la compilación, y que deberán copiarse a donde 
se pretenda dar uso a los mismos.

Actualizaciones
---------------------------------------

En caso de haber actualizaciones de los paquetes se sugiere hacer una
actualización de los compiladores utilizando el siguiente comando:
```
npm update
```

Posterior a la actualización de paquetes deberá ejecutarse de nuevo el comando
`npm run build`, el cual generará las nuevas versiones de archivos compilados en
el directorio "dist".

Ejemplos de utilización del código
---------------------------------------

Se incluye un directorio "samples" con muestras del código que se puede utilizar
para dar la apariencia respectiva al sitio.

Mantenimiento del código fuente
---------------------------------------

En caso de estar realizando pruebas de actualización del código fuente está
disponible la opción de compilación automática al modificarse el archivo con
el comando `npm run watch`.

De igual manera está disponibles comandos para hacer compilación y monitoreo
independiente.

* `npm run build:styles`
* `npm run build:fonts`
* `npm run build:graphics`
* `npm run build:scripts`
* `npm run watch:styles`
* `npm run watch:fonts`
* `npm run watch:graphics`
* `npm run watch:scripts`