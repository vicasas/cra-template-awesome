<h1 align="center">React Template Awesome</h1>
<div align="center">
  <sub>Created by <a href="https://github.com/vicasas">Víctor Casas</a> and forked from <a href="https://create-react-app.dev/">Create React App</a>.</sub>
</div>
<div align="center">
  <sub>Hecho con ❤ para LATAM</sub>
</div>

## Features

Este proyecto fue inicializado con [Create React App](https://create-react-app.dev/) por ende cuenta con todo el poder que ya viene de esta plantilla, más los siguientes:

* ✨ **Redux**: Manejo del estado de tu aplicación.
* ✨ **PropTypes**: Verificación de tipos para las props de React.
* ✨ **React Router**: Manejo de la navegación de tu aplicación.
* ✨ **Environments**: Entornos para ambiente development, staging y production.

Para que la experiencia de desarrollo (DX) se más asombrosa, contamos con lo siguiente:

* ✨ **EditorConfig** (*): Mantén estilos de codificación consistentes.
* ✨ **ESLint** (*): Encuentra y repara problemas en tu código JavaScript.
* ✨ **Prettier**: Mantén siempre formateado tu código.
* ✨ **Husky**: Previene los males de Git con los Hooks de Git.
* ✨ **lint-staged**: Ejecuta linters contra archivos Git en estado confirmados ```git add```.

> (*) Para un mejor confort de desarrollo, debes tener instaladas las extensiónes en tu editor de código favorito.

## Quick Start

Es muy fácil de comenzar a usar RTA, solo debes seguir los siguientes pasos para tener una versión propia en tu maquina local.

```bash
git clone [URL] my-app
cd my-app
npm install
npm start
```

## Available Scripts

Cuenta con todo el poder de los `scripts` que posee [Create React App](https://create-react-app.dev/) más los siguiente que hemos creado para ti.

⚠ Te sugerimos NO USAR `npm run eject`.

### `npm run build:staging`

Se usa para hacer `build` de una solución que se usara directamente en tu maquina staging o qa. Tomará las configuraciones que existan en el archivo de variables de entorno `.env.staging`.

### `npm run build:development`

Se usa para hacer un `build` de una solución que se usara directamente en tu maquina development. Tomará las configuraciones que existan en el archivo de variables de entorno `.env.development`.

🤔 ¿Qué hago para hacer un `build` en producción? *-se sigue usando por defecto `npm run build` que tomará las configuraciones que existan en el archivo de variables de entornos `.env.production`.*

### `npm run lint`

Se usa para inpeccionar el código JavaScript en busca de errores usando ESLint, los cuales son indicados mediante la consola.

### `npm run lint:fix`

Se usa para inpeccionar y a la misma vez corregir el código JavaScript que contiene errores usando ESLint.

### `npm run pretty`

Se usa para dar formato al código siguiendo las reglas de Prettier definas por el equipo de desarrollo.

## **ROADMAP**

¿Que es lo próximo que se viene? 

🚀 Generar nuestra `CONTRIBUTORS.md` para contribuir al repositorio.

🚀 Generar nuestro `CODE_OF_CONDUCT.md` para el código de conducta. 

[...]

🚀 Nos gustaría llevar nuestra plantilla a ser una [Custom Template](https://create-react-app.dev/docs/custom-templates/) oficial de [Create React App](https://create-react-app.dev/), en donde los desarrolladores la puedan instalar solo usando el comando `npx create-react-app my-app --template [template-name]` que provee el mismo CRA.

💥 Problema: Actualmente el custom template de CRA no trabaja con las `devDependencies` del `package.json` dado que esta plantilla tiene dichas dependencias no la podemos llevar a lo que anhelamos. ¿Se podrá buscar una solución?.

🚀 Nos gustaría agregar linters para la validación de los commits de Git.

🚀 Nos gustaría agregar la generación automatica de `CHANGELOG.md`.

🚀 Nos gustaría agregar un manejo fácil para incrementar versiones semanticas en cada release, como por ejemplo lo que hace `npm version`.

🚀 Generar componentes tipos helpers o utils esenciales para desarrolladores.

🚀 Generar funciones tipos helpers o utils esenciales para desarrolladores.

...Y claro, nos gustaría hacer muchas cosas más ❤. ¿Te animas? 🙌.

## License

React Template Awesome is [MIT Licensed](./LICENSE) 😁.
