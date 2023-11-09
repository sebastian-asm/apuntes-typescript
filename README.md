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
- **void**: es una forma de indicar que no hay un valor de retorno
- **never**: indica que algo, por ejemplo una function, no debe terminar de manera exitosa sino con un error
