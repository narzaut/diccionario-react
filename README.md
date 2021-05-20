# Ejercicio
En los siguientes ejercicios, se evaluará las capacidades para desarrollar en React utilizando las siguientes características:

Elementos y Componentes (y las props).\.\
Estado y ciclo de vida del mismo.\
Router y navegación

Se deberá realizar un ejercicio que contenga las siguientes características:.\

Se debe realizar una aplicación cuyo funcionamiento sea buscar el significado de una palabra. .\
Al encontrar el significado de la palabra es posible guardarlo como favoritos.\
Se puede tener un listado de palabras favoritas y sus definiciones, así como también quitar palabras del listado de palabras favoritas..\
Las palabras en el listado de palabras favoritas deben estar ordenadas alfabéticamente, utilizando sort (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).\
Debe haber un botón para limpiar la lista de palabras favoritas. .\
Se debe utilizar la API de LocalStorage (https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) para persistir los datos en el navegador, de forma que al refrescar el navegador (F5) no se borren los datos..\
Se deben utilizar los componentes de Ant Design (https://ant.design/).\
Se debe utilizar la siguiente API rest (https://api.dictionaryapi.dev/api/v1/entries/es/PALABRA) sustituyendo PALABRA por la palabra a buscar. .\


 
Detalles técnicos.\

Se deben utilizar solo componentes de tipo función..\
Debe haber una ruta para el buscador de palabras, y otra ruta para el listado de palabras favoritas.\
Se deben guardar las palabras favoritas en el estado, y al montarse el componente principal, se deben cargar las palabras guardadas del localStorage.\
En caso de que la definición de la palabra que se esté buscando no exista, la API devolverá un mensaje diciendo que la palabra no existe. En este caso, la aplicación debería reaccionar de forma adecuada, mostrando un alert (o cualquier otro método que provee Ant Design para mostrar errores) .\
Para guardar los datos en el localStorage, el posible que se necesite usar JSON.parse y JSON.stringify.\

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
