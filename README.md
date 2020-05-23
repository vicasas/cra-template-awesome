<h1 align="center">React Template Awesome</h1>
<div align="center">
  <sub>Created by <a href="https://github.com/vicasas">Víctor Casas</a> and started with <a href="https://create-react-app.dev/">Create React App</a>.</sub>
</div>
<div align="center">
  <sub>Made with ❤</sub>
</div>

<br />

## About

A custom template for the [Create React App](https://create-react-app.dev/). Using all the power it contains, in addition to the incredible additional functions and technologies that we implement for you.

## Features

* ✨ **Redux**: Managing the status of your application.
* ✨ **PropTypes**: Type check for React props.
* ✨ **React Router**: Managing the navigation of your application.
* ✨ **Environments**: Custom environments (development, staging and production).

For a better development experience, we added the following:

😍 Help components already integrated.

* ✨ **React.StrictMode**: Highlights possible problems in the application.
* ✨ **Public/Private Routes**: Management of public and private routes.
* ✨ **Public/Private Layout**: Management of public and private Layout.

😍 Tools for code development

* ✨ **EditorConfig** (*): Maintaining consistent coding styles.
* ✨ **ESLint** (*): Find and fix problems in your JavaScript code.
* ✨ **Prettier**: Always keep your code formatted.
* ✨ **Husky**: Prevents Git's ills.
* ✨ **lint-staged**: Run linters against Git files in confirmed state `git add`.

> (*) PWe recommend that you have the extensions installed in your favorite code editor.

## Quick Start

It is very easy to start using RTA, you just have to follow the following steps to have your own version on your local machine.

```bash
git clone https://github.com/vicasas/cra-template-awesome.git my-app
cd my-app
npm install
npm start
```

## Available Scripts

With all the power of the Create React App `scripts`, plus the following we have created for you.

> ⚠ We recommend that you do not use `npm run eject`.

### `npm run build:staging`

It is used to `build` a solution that will be used directly on your test equipment or qa. It will take any settings that exist in the environment variables file `.env.staging`.

### `npm run build:development`

It is used to `build` a solution that will be used directly on your dvelopment equipment. It will take any settings that exist in the environment variables file `.env.development`.

> What do I do to make a `build` in production? *-The default `npm run build` is still used, which will take the configurations that exist in the environment variables file` .env.production`.*

### `npm run lint`

Used to inspect JavaScript code for errors using ESLint, which are indicated by the console.

### `npm run lint:fix`

Used to inspect and at the same time correct JavaScript code that contains errors using ESLint.

### `npm run pretty`

Used to format the code following the Prettier rules defined by the development team.

## **Roadmap**

What is next?

🔔 First things first, to launch our v1.0.0 we have set ourselves the goal of being an admissible `package` for [Custom Template] (https://create-react-app.dev/docs/custom-templates/) official [Create React App] (https://create-react-app.dev/), where developers can install the template using only the `npx create-react-app my-app --template awesome` command.

💥 Issue: Currently the CRA Custom Template does not work with the `devDependencies` of the` package.json` since this template has such dependencies we cannot take it to what we want. Can we find a solution?

[...]

🚀 Generate our `CONTRIBUTORS.md` to contribute to the repository. ¡Ready! ✔

🚀 Generate our `CODE_OF_CONDUCT.md` for the code of conduct. ¡Ready! ✔

🚀 Automatically generate `CHANGELOG.md`.

🚀 Genere linters para la validación de confirmaciones de Git.

🚀 Automatically generate semantic versions in each release.

...¡And of course!, We would like to do many more things 🙌❤.

## Contributing

¿Do you like RTA? We invite you to [collaborate with us](./CONTRIBUTING.md).

## Changelog

To see what has changed, visit our [CHANGELOG.md](./CHANGELOG.md).

## License

React Template Awesome is [MIT Licensed](./LICENSE) 😁.
