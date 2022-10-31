import {LCD_Sensual, esperar} from '@enflujo/lcd';
import { bichos } from '../utilidades/bichos.js';

const lcd = new LCD_Sensual();

async function iniciar() {
  await lcd.iniciar();

  // Cargar 8 caracteres especiales.
  await lcd.crearCaracter(0, bichos.e);
  await lcd.crearCaracter(1, bichos.n);
  await lcd.crearCaracter(2, bichos.f);
  await lcd.crearCaracter(3, bichos.l);
  await lcd.crearCaracter(4, bichos.u);
  await lcd.crearCaracter(5, bichos.j);
  await lcd.crearCaracter(6, bichos.o);
  await lcd.crearCaracter(7, bichos.corazon);

  // Imprimirlos en la pantalla
  const corazon = lcd.obtenerCaracter(7);
  await lcd.imprimir(corazon);
  await lcd.imprimir('...');

  await lcd.imprimir(lcd.obtenerCaracter(0));
  await lcd.imprimir(lcd.obtenerCaracter(1));
  await lcd.imprimir(lcd.obtenerCaracter(2));
  await lcd.imprimir(lcd.obtenerCaracter(3));
  await lcd.imprimir(lcd.obtenerCaracter(4));
  await lcd.imprimir(lcd.obtenerCaracter(5));
  await lcd.imprimir(lcd.obtenerCaracter(6));

  await lcd.imprimir('...');
  await lcd.imprimir(corazon);

  // Iniciar animación
  palpitar(1000, corazon);
}

async function palpitar(velocidad, caracter) {
  await lcd.imprimir(caracter, 1, 1); // corazón en fila 1, columna 1
  await lcd.imprimir(caracter, 1, 15); // corazon en fila 1, columna 15

  // Esperar la cantidad de tiempo que pasamos como parámetro.
  await esperar(velocidad);

  // Borrar los corazones pasando un texto vacío donde están ubicados.
  await lcd.imprimir(' ', 1, 1);
  await lcd.imprimir(' ', 1, 15);

  // Esperar antes de volver a iniciar el bucle.
  await esperar(velocidad);

  // Reiniciar la animación para que se anime en bucle.
  palpitar(velocidad, caracter);
}

iniciar();
