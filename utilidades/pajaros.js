import { binarioAHex } from "@enflujo/lcd";

const pajaros = {
  pajaro1: `00000,
            00100,
            00110,
            01110,
            11111,
            00000,
            00000,
            00000`,

pajaro2: `00000,
          00100,
          00100,
          01110,
          11111,
          00000,
          00000,
          00000`,

pajaro3: `00000,
          00000,
          00000,
          01110,
          11111,
          00100,
          00000,
          00000`,

pajaro4: `00000,
          00000,
          00000,
          00001,
          11110,
          01110,
          01110,
          00100`,

pajaro5: `00000,
          00000,
          00001,
          00110,
          11110,
          01110,
          01100,
          00100`,

pajaro6: `00000,
          00000,
          00001,
          01110,
          11110,
          01100,
          00100,
          00000`,

pajaro7: `00000,
          00000,
          01010,
          01111,
          11110,
          00100,
          00000,
          00000`,

pajaro8: `00000,
          00000,
          00000,
          00110,
          11111,
          01100,
          00000,
          00000`
}

for (const llave in pajaros) {
  pajaros[llave] = binarioAHex(pajaros[llave]);
}

export { pajaros };