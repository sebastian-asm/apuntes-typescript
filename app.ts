// Tipos de datos
const num: number = 10
const numbers: number[] = [1, 2, 3, 4, 5]
const hero: (string | number)[] = ['Dr. Strange', 100]
let char: string

function sayHello(msg: string) {
  console.log(msg)
}

// TUPLA: indica el valor específico en la posición de array
// En este caso el primer valor solo será string, el segundo number
// Y por último un boolean
const hero2: [string, number, boolean] = ['Dr. Strange', 100, true]

// ENUM: ayuda a trabajar con valores que tienen sentido semántico y fácil de leer
enum AudioLevel {
  min,
  medium,
  max
}

let currentAudio: AudioLevel = AudioLevel.medium

// VOID
function demo(): void {}
const demo2 = (): void => {}

// NEVER
const error = (msg: string): never => {
  throw new Error(msg)
}
