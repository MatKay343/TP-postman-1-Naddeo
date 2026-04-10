# TP Postman – Testing de API
En este trabajo se realizaron pruebas sobre la PokéAPI utilizando Postman. Se ejecutaron distintas requests para verificar el funcionamiento de los endpoints y se agregaron tests para validar las respuestas tanto en casos correctos como en casos de error.
Endpoints utilizados:

Durante las pruebas se utilizaron los siguientes endpoints de la PokéAPI:

* GET [https://pokeapi.co/api/v2/pokemon/pikachu](https://pokeapi.co/api/v2/pokemon/pikachu)
  Se utilizó para obtener un Pokémon por nombre. La respuesta fue 200 OK y devolvió un JSON con datos como nombre, imagen (sprites.front_default), tipos, peso y altura.

* GET [https://pokeapi.co/api/v2/pokemon/25](https://pokeapi.co/api/v2/pokemon/25)
  Se utilizó para obtener un Pokémon por ID. Devuelve la misma información que la búsqueda por nombre.

* GET [https://pokeapi.co/api/v2/pokemon?limit=10&offset=0](https://pokeapi.co/api/v2/pokemon?limit=10&offset=0)
  Se utilizó para obtener una lista de Pokémon. La respuesta fue 200 OK y devolvió un array "results" con nombres y URLs.

* GET [https://pokeapi.co/api/v2/type/electric](https://pokeapi.co/api/v2/type/electric)
  Se utilizó para obtener información de un tipo. Devuelve los Pokémon de ese tipo y relaciones de daño.

* GET [https://pokeapi.co/api/v2/pokemon/xyz](https://pokeapi.co/api/v2/pokemon/xyz)
  Se utilizó para probar un caso de error. La respuesta fue 404 Not Found indicando que el recurso no existe.

Los endpoints fueron obtenidos a partir de la documentación oficial y probando variaciones en Postman (por ejemplo, cambiar pokemon/{id} por pokemon/{name}).

 Tests implementados

Se validaron los siguientes aspectos:

* Código de estado (200 OK y 404 Not Found)
* Tiempo de respuesta
* Formato de la respuesta (JSON)
* Presencia de datos en la respuesta (nombre, tipos, imagen, etc.)

Ejemplo de test:

```javascript
pm.test("Status 200", function () {
    pm.response.to.have.status(200);
});
```

 Estructura del proyecto

* collection.json: colección de Postman
* environment.json (opcional): variables de entorno
* README.md: documentación

 Cómo usar

1. Importar la colección en Postman
2. Ejecutar las requests
3. Verificar los resultados en la sección de tests

 Decisiones tomadas

* Se utilizaron endpoints de la PokéAPI según su documentación oficial
* Se probaron tanto búsquedas por nombre como por ID
* Se incluyeron casos de error para validar respuestas incorrectas
* Se organizaron las requests de forma clara

 Dificultades encontradas

* Comprender la estructura de las respuestas JSON
* Identificar correctamente los endpoints disponibles
* Manejar errores cuando el recurso no existe

 Conclusión

Se logró implementar un conjunto de pruebas funcionales sobre la PokéAPI, validando tanto respuestas correctas como errores, utilizando Postman como herramienta principal.
