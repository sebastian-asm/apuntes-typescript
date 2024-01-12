# Apuntes TypeScript

Super set de JavaScript, expandiendo funcionalidades como agregando tipado estricto, interfaces, etc. También permite utilizar las últimas caracteristícas y traducirlas al estandar de JS que se necesitaría correr.

Instalación a nivel global: `pnpm add -g typescript`

### Comandos básicos

- `tsc --init`: crear archivo tsconfig.json (archivo de configuración de TS)
- `tsc -w`: modo observador de cambios

### Tipos de datos

TypeScript permite crear nuevos tipos de datos como: interfaces, genéricos y tuplas.

- **Primitivos**: string, number, boolean, symbol
- **Compuestos**: objetos literales (llave, valor), funciones, clases, arreglos
- **Tupla**: indica el valor específico en la posición de array
- **Enun**: ayuda a trabajar con valores que tienen sentido semántico y fácil de leer
- **Void**: es una forma de indicar que no hay un valor de retorno
- **Never**: indica que algo, por ejemplo una función, no debe terminar de manera exitosa sino con un error
- **Type**: palabra reservada para definir un tipo, o sea, asignar reglas o "contratos" a un objeto o variable que debe cumplir

Una función puede recibir parámetros opcionales especificados con el símbolo _?_, estos valores opcionales siempre debe ir al final. También se pueden indicar valores por default con el símbolo _=_. Se pueden capturar parámetros de manera indefinida mediante la sintáxis _rest_ (...).

```ts
function demo(firstname: string, isAdmin: boolean = false, lastName?: string, ...args: string[]) {}
```

Con el siguiente por ejemplo, se define una variable que puede recibir como valor una función la cual no recibe parámetros y que devuelve un string: `let myFunction: () => string`
