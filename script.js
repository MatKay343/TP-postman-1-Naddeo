const API_URL = "https://pokeapi.co/api/v2/pokemon/";

async function buscarPokemon() {
  const nombreInput = document.getElementById("inputPokemon").value.toLowerCase().trim();

  limpiar();

  if (nombreInput === "") {
    mostrarError("Ingresá un nombre válido");
    return;
  }

  mostrarLoading(true);

  try {
    const response = await fetch(API_URL + nombreInput);

    if (!response.ok) {
      throw new Error("No existe el Pokémon");
    }

    const data = await response.json();
    mostrarPokemon(data);

  } catch (error) {
    mostrarError(error.message);
  } finally {
    mostrarLoading(false);
  }
}

function mostrarPokemon(pokemon) {
  document.getElementById("card").classList.remove("hidden");

  document.getElementById("nombre").textContent = pokemon.name;
  document.getElementById("imagen").src = pokemon.sprites.front_default;
  document.getElementById("tipo").textContent = "Tipo: " + pokemon.types.map(t => t.type.name).join(", ");
  document.getElementById("peso").textContent = "Peso: " + pokemon.weight;
  document.getElementById("altura").textContent = "Altura: " + pokemon.height;
}

function mostrarError(msg) {
  document.getElementById("error").textContent = msg;
}

function mostrarLoading(estado) {
  const loading = document.getElementById("loading");
  if (estado) {
    loading.classList.remove("hidden");
  } else {
    loading.classList.add("hidden");
  }
}

function limpiar() {
  document.getElementById("error").textContent = "";
  document.getElementById("card").classList.add("hidden");
}
