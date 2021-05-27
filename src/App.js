/* Ejercicio Integrador

En los siguientes ejercicios, se evaluará las capacidades para desarrollar en React utilizando las siguientes características:

Elementos y Componentes (y las props)
Estado y ciclo de vida del mismo
Router y navegación

Se deberá realizar un ejercicio que contenga las siguientes características:

Se debe realizar una aplicación cuyo funcionamiento sea buscar el significado de una palabra.
Al encontrar el significado de la palabra es posible guardarlo como favoritos
Se puede tener un listado de palabras favoritas y sus definiciones, así como también quitar palabras del listado de palabras favoritas.
Las palabras en el listado de palabras favoritas deben estar ordenadas alfabéticamente, utilizando sort (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
Debe haber un botón para limpiar la lista de palabras favoritas.
Se debe utilizar la API de LocalStorage (https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) para persistir los datos en el navegador, de forma que al refrescar el navegador (F5) no se borren los datos.
Se deben utilizar los componentes de Ant Design (https://ant.design/)
Se debe utilizar la siguiente API rest (https://api.dictionaryapi.dev/api/v1/entries/es/PALABRA) sustituyendo PALABRA por la palabra a buscar.


 
Detalles técnicos

Se deben utilizar solo componentes de tipo función.
Debe haber una ruta para el buscador de palabras, y otra ruta para el listado de palabras favoritas
Se deben guardar las palabras favoritas en el estado, y al montarse el componente principal, se deben cargar las palabras guardadas del localStorage
En caso de que la definición de la palabra que se esté buscando no exista, la API devolverá un mensaje diciendo que la palabra no existe. En este caso, la aplicación debería reaccionar de forma adecuada, mostrando un alert (o cualquier otro método que provee Ant Design para mostrar errores) 
Para guardar los datos en el localStorage, el posible que se necesite usar JSON.parse y JSON.stringify
*/

import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {SearchView} from './components/SearchView'
import { FavoriteView } from './components/FavoriteView'
function App() {
  return (
    <Router>
      <div className = 'container'>
        <Switch>
          <Route path='/' exact component={ SearchView } />
          <Route path='/favorite' exact component={ FavoriteView } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
