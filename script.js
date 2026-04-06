async function buscarPokemon() {
  const input = document.getElementById("pokemonInput").value.toLowerCase();
  const card = document.getElementById("pokemonCard");
  const loading = document.getElementById("loading");

  card.innerHTML = "";
  loading.style.display = "block";

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    if (!response.ok) throw new Error("Pokémon no encontrado");

    const data = await response.json();

    card.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p>Tipo: ${data.types.map(t => t.type.name).join(", ")}</p>
      <p>Peso: ${data.weight}</p>
      <p>Altura: ${data.height}</p>
    `;
  } catch (error) {
    card.innerHTML = `<p style="color:red;">${error.message}</p>`;
  } finally {
    loading.style.display = "none";
  }
}
