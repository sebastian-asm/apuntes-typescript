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
console.log({ user })

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

// Clases
class Avenger {
  // private name: string
  // public team: string
  // public realName?: string
  // static age: number

  // constructor(name: string, team: string, realName?: string) {
  //   this.name = name
  //   this.team = team
  //   this.realName = realName
  // }

  // Forma abreviada
  static age: number = 30
  // static no se puede definir directamente dentro del constructor
  constructor(private name: string, public realName: string, public team?: string) {}

  // Por default los métodos son públicos
  bio() {
    return `${this.name} | ${this.team}`
  }
}

const antman = new Avenger('Antman', 'Capitan', 'Scoot Lang')
console.log({ antman, age: Avenger.age })
console.log(antman.bio())

class XMen extends Avenger {
  constructor(name: string, realName: string, public isMutant: boolean) {
    super(name, realName)
  }

  get fullName() {
    return `El nombre real es: ${this.realName}`
  }

  set fullName(name: string) {
    if (name.length < 3) throw new Error('El nombre debe tener más de 3 letras')
    this.realName = name
  }
}

const wolverine = new XMen('Wolverine', 'Logan', true)
console.log({ wolverine })
console.log(wolverine.fullName)
wolverine.fullName = 'Test'
console.log({ wolverine })

// Clase abstracta
abstract class Mutante {
  constructor(public name: string, public realName: string) {}
}

class Xmen2 extends Mutante {}
const cyclops = new Xmen2('Cyclops', 'Scott')
console.log({ cyclops })

const printName = (character: Mutante) => {
  console.log(character.realName)
}
printName(cyclops)

// Interfaces
interface Client {
  name: string
  age: number
  address?: Address
}

interface Address {
  id: number
  zip: string
  city: string
}

const client: Client = {
  name: 'Belu',
  age: 39
}

// Interface para una función
interface CiudadGotica {
  (ciudadanos: string[]): number
}

const ciudadGotica: CiudadGotica = (ciudadanos: string[]) => {
  return ciudadanos.length
}

interface Xmen {
  name: string
  realName: string
  mutantPower(id: number): string
}

interface Power {
  powerAttack?: number
}

class Mutant implements Xmen, Power {
  constructor(public name: string, public realName: string, public powerAttack: number) {}
  mutantPower(id: number): string {
    return ``
  }
}

// Namespace
namespace Validations {
  export const validateText = (text: string) => (text.length < 3 ? false : true)
}
console.log(Validations.validateText('Seba'))
