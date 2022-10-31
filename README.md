# Ejemplos para librería [@enflujo/lcd](https://github.com/enflujo/enflujo-lcd)

Este repositorio contiene ejemplos para crear cosas en pantallas LCD conectadas a una RaspberryPi.

## Instalación

Descargar este repositorio en la Raspberry:

```bash
git clone https://github.com/enflujo/enflujo-lcd-ejemplos.git
```

Instalar dependencias:

```bash
yarn 
```

## Ver ejempĺos

Todos los archivos en `./ejemplos` se corren de la misma forma:

Ir a la carpeta de ejemplos:

```bash
cd ejemplos/
```

Cargar ejemplo en la LCD:

```bash
node basico.js
```

```bash
node carita.js
```
etc...

## Caracteres especiales

Para crear caracteres especiales ver primero el archivo `./utilidades/bichos.js`

Se pueden agregar otros al objeto, por ejemplo:

```js
const bichos = {
  // Esta es una E enflujuda pintada en código binario.
  // Un digito en la LCD tiene 5x8 leds,
  // y los podemos prender y apagar con 1 y 0 así:
  e: `00010,
      00101,
      01000,
      10000,
      01100,
      10000,
      01001,
      00110`, // poner una coma antes de agregar uno nuevo.

  // Para agregar uno nuevo se pone un nombre (lo que quiera) y el código:
  arbol: `00100,
          01010,
          10001,
          01010,
          00100,
          00100,
          00100,
          00100`
}
```

Luego de crear el caracter, se puede imprimir en la LCD:

```js
// Cargar en la RAM de la LCD
await lcd.crearCaracter(0, bichos.arbol);

// Imprimir
await lcd.imprimir(lcd.obtenerCaracter(0));
```

Ver un ejemplo completo en [enflujoEspecial.js](./ejemplos/enflujoEspecial.js)