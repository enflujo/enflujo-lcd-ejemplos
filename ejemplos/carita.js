import { LCD_Sensual, esperar } from '@enflujo/lcd';
import { bichos } from '../utilidades/bichos.js';

const lcd = new LCD_Sensual();

async function inicio() {
  await lcd.iniciar();

  // Ver los caracteres especiales en el archivo ../utilidades/bichos.js
  await lcd.crearCaracter(0, bichos.caraNeutra);
  await lcd.crearCaracter(1, bichos.caraFeliz);
  animar();
}

async function animar() {
  // Imprimir caraNeutra que esta en posición 0 de los caracteres especiales.
  // Los numeros equivalen a la posición: fila 1, columna 8.
  await lcd.imprimir(lcd.obtenerCaracter(0), 1, 8);
  // Esperar 1 segundo.
  await esperar(1000);
  // Imprimir caraFeliz en la misma posición de la anterior.
  await lcd.imprimir(lcd.obtenerCaracter(1), 1, 8);
  // esperar 1 segundo.
  await esperar(1000);

  // Volver a ejecutar esta función, de esta manera se anima en bucle eternamente,
  // o mientras esta corriendo en la terminal.
  animar();
}

inicio();
