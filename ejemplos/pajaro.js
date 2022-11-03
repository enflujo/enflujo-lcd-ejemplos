import { esperar, LCD_Sensual } from '@enflujo/lcd';
import { pajaros } from '../utilidades/pajaros.js';
const lcd = new LCD_Sensual();

async function inicio() {
  await lcd.iniciar();

  await lcd.crearCaracter(0, pajaros.pajaro1);
  await lcd.crearCaracter(1, pajaros.pajaro2);
  await lcd.crearCaracter(2, pajaros.pajaro3);
  await lcd.crearCaracter(3, pajaros.pajaro4);
  await lcd.crearCaracter(4, pajaros.pajaro5);
  await lcd.crearCaracter(5, pajaros.pajaro6);
  await lcd.crearCaracter(6, pajaros.pajaro7);
  await lcd.crearCaracter(7, pajaros.pajaro8);

  animar();
}
const velocidad = 100;
async function animar() {
  await lcd.imprimir(lcd.obtenerCaracter(0), 1, 1);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(1), 1, 2);
  await lcd.imprimir(' ', 1, 1);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(2), 1, 3);
  await lcd.imprimir(' ', 1, 2);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(3), 1, 4);
  await lcd.imprimir(' ', 1, 3);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(4), 1, 5);
  await lcd.imprimir(' ', 1, 4);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(5), 1, 6);
  await lcd.imprimir(' ', 1, 5);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(6), 1, 7);
  await lcd.imprimir(' ', 1, 6);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(7), 1, 8);
  await lcd.imprimir(' ', 1, 7);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(0), 1, 9);
  await lcd.imprimir(' ', 1, 8);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(1), 1, 10);
  await lcd.imprimir(' ', 1, 9);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(2), 1, 11);
  await lcd.imprimir(' ', 1, 10);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(3), 1, 12);
  await lcd.imprimir(' ', 1, 11);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(4), 1, 13);
  await lcd.imprimir(' ', 1, 12);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(5), 1, 14);
  await lcd.imprimir(' ', 1, 13);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(6), 1, 15);
  await lcd.imprimir(' ', 1, 14);
  await esperar(velocidad)
  await lcd.imprimir(lcd.obtenerCaracter(7), 1, 16);
  await lcd.imprimir(' ', 1, 15);
  await esperar(velocidad)
  await lcd.imprimir(' ', 1, 16);
  await esperar(velocidad)
  animar()
}

inicio();