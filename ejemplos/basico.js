import { LCD_Sensual } from '@enflujo/lcd';

const lcd = new LCD_Sensual();

async function inicio() {
  // Preparar pantalla.
  await lcd.iniciar();

  // Imprimir texto.
  await lcd.imprimir('laboratorio');
  await lcd.imprimir('.:: EnFlujo ::.', 2, 7);

  // Terminamos, Node va a desocupar el terminal y podemos cerrar la conexión con la pantalla.
  await lcd.cerrar();
}

inicio();
