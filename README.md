<img src='./Info/Marca.png'/>

# Individual Project - Henry Pokemon

<img height="150" src="./pokemon.png" />

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Comenzando

1.  Clonar el repositorio en sus computadoras
2.  Ejecutar el comando `npm install` en la consola, dentro de los directorios `api` y `client` para poder instalar las dependencias

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `pokemon`

El contenido de `client` fue creado usando: Create React App.

#### Tecnologías necesarias

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

## Ejecucion

Para poder correr localmente el proyecto funcionando es necesario realizar los siguientes pasos una vez que se hicieron las configuraciones previas del archivo `.env` y la creacion de la base de datos en PostgreSQL con el nombre `pokemon`:

- Ingresar al directorio de api y correr el back con el comando `npm start` desde la consola

- Luego, ingresar al directorio de client y correr el front con el comando `npm start` desde la consola

## Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

**Pagina inicial**: deben armar una landing page con

- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

**Resultado**:

<img src='./Info/LandingPage.png' height='200' />

**Ruta principal**: debe contener

- [ ] Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)
- [ ] Área donde se verá el listado de pokemons. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta `GET /pokemons` y deberá mostrar su:
  - Imagen
  - Nombre
  - Tipos (Electrico, Fuego, Agua, etc)
- [ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por ataque
- [ ] Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina.

**Ruta de detalle de Pokemon**: debe contener

- [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
- [ ] Número de Pokemon (id)
- [ ] Estadísticas (vida, ataque, defensa, velocidad)
- [ ] Altura y peso

**Ruta de creación**: debe contener

- [ ] Un formulario **controlado con JavaScript** con los campos mencionados en el detalle del Pokemon
- [ ] Posibilidad de seleccionar/agregar más de un tipo de Pokemon
- [ ] Botón/Opción para crear un nuevo Pokemon

> Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre del Pokemon no pueda contener caracteres numéricos, que la altura no pueda ser superior a determinado valor, etc.

**Estilos**:

Los estilos del proyecto estan basados en la version `Rojo Fuego` del juego, lanzadas por Nintendo en 2004. Debido al impacto que tuvo esta version del juego en sus fans.

**DEMO**:

<img src='./Info/PokeFRV.gif' height='200'/>

## Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [ ] Pokemon con las siguientes propiedades:
  - ID (Número de Pokemon) \* : No puede ser un ID de un pokemon ya existente en la API pokeapi
  - Nombre \*
  - Vida
  - Ataque
  - Defensa
  - Velocidad
  - Altura
  - Peso
- [ ] Tipo con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades debe ser de muchos a muchos ya que un pokemon puede pertenecer a más de un tipo y, a su vez, un tipo puede incluir a muchos pokemons.

## Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

- [ ] **GET /pokemons**:
  - Obtener un listado de los pokemons desde pokeapi.
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] **GET /pokemons/{idPokemon}**:
  - Obtener el detalle de un pokemon en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de pokemon
  - Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
- [ ] **GET /pokemons?name="..."**:
  - Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
  - Si no existe ningún pokemon mostrar un mensaje adecuado
- [ ] **POST /pokemons**:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
  - Crea un pokemon en la base de datos relacionado con sus tipos.
- [ ] **GET /types**:
  - Obtener todos los tipos de pokemons posibles
  - En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

## Testing

- [ ] Para correr los test del front se debe acceder al directorio `client` y ejecutar el siguiente comando en consola

```env
npm test
```

Para correr todos los test o

```env
npm test 'nombre del archivo'
```

Para correr un test individual

- [ ] Para correr los test del front se debe acceder al directorio `api` y ejecutar el siguiente comando en consola

```env
npm test
```

Para correr todos los test o

```env
npm test 'nombre del archivo'
```

Para correr un test individual

- **IMPORTANTE**: _Todos los test estan skipeados, se debe acceder a cada uno y quitarle el `skip` (la letra `x`) que se encuentra antes del `describe` principal de cada test, ubicados en los directorios con el nombre **test** de `api` y `client` respectivamente_
