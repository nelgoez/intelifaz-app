
# Detalles de la app y explición de Redux

## Scripts disponibles

En el proyecto puedes corrrer:

### `yarn start` / `npm start`

Para correr la app en modo developer. /
Abre [http://localhost:3000](http://localhost:3000) para ver la app el en navegador.

La página se recargará si realiza modificaciones.

### `yarn test` / `npm test`

Inicia el motor de pruebas en el modo de vigía interactivo.

### `yarn build`

Construye la aplicación para producción en la carpeta `build`.

## Readux

El propósito de Redux es hacer predecibles los cambios de estado, imponiendo ciertas restricciones sobre como y cuando pueden producirse las actualizaciones. Redux consigue que tu gestión de estado sea transparente y determinista, lo que entre otras cosas aporta…

* Mejor comprensión de la evolución del estado en un momento dado
* Facilidad para incorporar nuevas características a la app
* Mejoras en el proceso de desarrollo, pudiendo reiniciar la ejecución a partir de un estado concreto.

Si prescindes de Redux, en React tienes componentes con estado, que para comunicarlo, pasan el valor de padres a hijos a través de sus propiedades. Eso significa que si tienes un árbol muy grande de componentes, para pasar el estado del componente superior al componente inferior tienes que irlo pasando componente a componente por todos los nodos intermedios. Lo cual es algo incómodo.

### Los principios fundamentales de Redux

* Fuente única de verdad : En Redux hay un único objeto que almacena el estado de toda la aplicación. Esto ayuda a la hora de trabajar con apps universales, así como a la hora de debugar y de reiniciar el desarrollo en un punto concreto de ejecución.
* Inmutabilidad: el estado es read-only. Ninguna interacción puede cambiarlo directamente. Lo único que puedes hacer para conseguirlo es emitir una acción que expresa su intención de cambiarlo.
* Funciones puras: Usa funciones puras (a mismos inputs, mismos outputs) para definir como cambia el estado en base a una acción. En Redux estas funciones se conocen como reducers y al ser puras, su comportamiento es predecible.

### Integración con react

Encapsulando nuestra aplicación con el componente Provider que trae react-redux. Este componente recibe un único parámetro llamado store el cual es, como su nombre indica, la instancia del Store que usamos.
Este componente Provider define en el contexto global de React nuestra instancia del store. Dejándolo de ésta fomra 'a la mano' para usarlo en los componentes que necesitemos ya sea mediante el decorador `connect` o con los hooks `useSelector`, `useDispatch` .

De ésta fomra usamos y/o mandámos a modificar el estados del store desde los componentes sin riesgos. Ya que solo mandamos un objeto con el tipo de acción y, si el tipo de acción lo requiere, los datos para realizarla:

En la forma : `{
        type: 'HACER_ESTO'
        payload: {
        estado: 'nuevo empleo'
            }
        }`

Y redux toma éste objeto (cuando despachamos alguna 'acción' -un objeto como el de arriba-), lo pasa por el reducer, que filtra las acciónes segun su tipo (si no cae en ningún typo esperado no hará nada, evitando problemas comunes.), y es este el que en ultima instancia tomará una cópia temporal del store o de la parte del store que queremos cambiar, la módificará (a la copia, nunca el store o estados directamente) y por útimo reemplazará el store con la copia.

Éste intricado recorrido para modificar un objeto, aunque al pricipio resulte engorroso, previene problemas comunes como reescribír o 'pisar' valores. Ya que nunca modificamos directamente nada. Mandamos a hacer a través de las estrictas reglas de Redux que nos compele a especificar y estructurar cómo y en que manera van a cambiar nuestros estados en redux.
