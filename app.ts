// Tipos de datos
const num: number = 10
const numbers: number[] = [1, 2, 3, 4, 5]
const hero: (string | number)[] = ['Dr. Strange', 100]
// Esta variable aceptará tipos string y booleanos
let char: string | boolean

function sayHello(msg: string) {
  console.log(msg)
}

// Tupla
// En este caso el primer valor solo será string, el segundo number y el último boolean
const hero2: [string, number, boolean] = ['Dr. Strange', 100, true]

// Enun
enum AudioLevel {
  min,
  medium,
  max
}

let currentAudio: AudioLevel = AudioLevel.medium

// Void
function demo(): void {}
const demo2 = (): void => {}

// Never
const error = (msg: string): never => {
  throw new Error(msg)
}

// Especificando el tipo de retorno que tendrá la función
function fullName(firstName: string, lastName?: string, ...args: (string | number)[]): string {
  return `Nombre: ${firstName} ${lastName} - Otros parámetros: ${args.join(' | ')}`
}

const user = fullName('Seba', 'Sanchez', 40, 'Desarrollador')
// console.log({ user })

// Type
type Hero = {
  name: string
  age: number
  powers: string[]
  getName?: () => string
}

const flash: Hero = {
  name: 'Barry Allen',
  age: 24,
  powers: ['Velocidad', 'Viajar en el tiempo']
}

const superman: Hero = {
  name: 'Clark Kent',
  age: 60,
  powers: ['Velocidad'],
  getName() {
    return this.name
  }
}
console.log({ flash, superman })
