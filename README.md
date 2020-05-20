<h1 align="center">React Template Awesome</h1>
<div align="center">
  <sub>Created by <a href="https://github.com/vicasas">Víctor Casas</a> and started with <a href="https://create-react-app.dev/">Create React App</a>.</sub>
</div>
<div align="center">
  <sub>Hecho con ❤ para LATAM</sub>
</div>

## Features

Cuenta con todo el poder que trae [Create React App](https://create-react-app.dev/) más lo siguiente:

* ✨ **Redux**: Manejo del estado de tu aplicación.
* ✨ **PropTypes**: Verificación de tipos para las props de React.
* ✨ **React Router**: Manejo de la navegación de tu aplicación.
* ✨ **Environments**: Entornos para ambiente development, staging y production.
* ✨ **React.StrictMode**: Resalta problemas potenciales en la aplicación.

Para que la experiencia de desarrollo (DX) sea aún más asombrosa, contamos con lo siguiente:

* ✨ **EditorConfig** (*): Mantén estilos de codificación consistentes.
* ✨ **ESLint** (*): Encuentra y repara problemas en tu código JavaScript.
* ✨ **Prettier**: Mantén siempre formateado tu código.
* ✨ **Husky**: Previene los males de Git con los Hooks de Git.
* ✨ **lint-staged**: Ejecuta linters contra archivos Git en estado confirmados ```git add```.

> (*) Para un mejor confort de desarrollo, debes tener instaladas las extensiónes en tu editor de código favorito.

## Quick Start

Es muy fácil de comenzar a usar RTA, solo debes seguir los siguientes pasos para tener una versión propia en tu maquina local.

```bash
git clone https://github.com/vicasas/cra-template-awesome.git my-app
cd my-app
npm install
npm start
```

## Available Scripts

Cuenta con todo el poder de los `scripts` que posee [Create React App](https://create-react-app.dev/) más los siguientes que hemos creado para ti.

> ⚠ Te sugerimos no usar `npm run eject` ⚠

### `npm run build:staging`

Se usa para hacer `build` de una solución que se usara directamente en tu maquina staging o qa. Tomará las configuraciones que existan en el archivo de variables de entorno `.env.staging`.

### `npm run build:development`

Se usa para hacer un `build` de una solución que se usara directamente en tu maquina development. Tomará las configuraciones que existan en el archivo de variables de entorno `.env.development`.

> 🤔 ¿Qué hago para hacer un `build` en producción? *-Se sigue usando por defecto `npm run build` que tomará las configuraciones que existan en el archivo de variables de entornos `.env.production`.*

### `npm run lint`

Se usa para inpeccionar el código JavaScript en busca de errores usando ESLint, los cuales son indicados mediante la consola.

### `npm run lint:fix`

Se usa para inpeccionar y a la misma vez corregir el código JavaScript que contiene errores usando ESLint.

### `npm run pretty`

Se usa para dar formato al código siguiendo las reglas de Prettier definas por el equipo de desarrollo.

## **ROADMAP**

¿Que es lo próximo que se viene?

🔔 Primero es lo primero, para lanzar nuestra v1.0.0 nos hemos puesto la meta de lograr ser un `package` admisible para los [Custom Template](https://create-react-app.dev/docs/custom-templates/) oficial de [Create React App](https://create-react-app.dev/), en donde los desarrolladores puedan instalar el template usando solo el comando `npx create-react-app my-app --template awesome`.

💥 Problema: Actualmente el Custom Template de CRA no trabaja con las `devDependencies` del `package.json` dado que esta plantilla tiene dichas dependencias no la podemos llevar a lo que anhelamos. ¿Se podrá buscar una solución?.

[...]

🚀 Generar nuestra `CONTRIBUTORS.md` para contribuir al repositorio. ✔😍 ¡READY!

🚀 Generar nuestro `CODE_OF_CONDUCT.md` para el código de conducta. ✔😍 ¡READY!

🚀 Generar linters para la validación de los commits de Git.

🚀 Generar automáticamente `CHANGELOG.md`.

🚀 Generar versiones semanticas en cada release, como `npm version`.

🚀 Generar componentes tipos helpers o utils esenciales para desarrolladores.

🚀 Generar funciones tipos helpers o utils esenciales para desarrolladores.

...¡Y CLARO!, nos gustaría hacer muchas cosas más ❤. ¿Te animas a contribuir con nosotros? 🙌.

## Changelog

Para ver lo que a cambiado visita nuestro [CHANGELOG.md](./CHANGELOG.md)

## License

React Template Awesome is [MIT Licensed](./LICENSE) 😁.
