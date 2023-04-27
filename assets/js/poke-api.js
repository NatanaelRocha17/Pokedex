

function convertPokeApiDetailToPokemon(pokeDetail) {

  const pokemon = new Pokemon();
  pokemon.name = pokeDetail.name;
  pokemon.number = pokeDetail.id
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types //pegando o array types o objeto da primeira posição --> isso se chama array des

  pokemon.type = type
  pokemon.types = types

  return pokemon;
}


const pokeApi = {
  getPokemosDetail: (pokemon) => {
    return fetch(pokemon.url)
      .then((response) => response.json())
      .then((aux) => {
        //console.log(convertPokeApiDetailToPokemon(aux))
        let aux2 = convertPokeApiDetailToPokemon(aux)
        console.log(aux2)
        return aux2
      })//convertPokeApiDetailToPokemon)
  },

  getPokemos: (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return (fetch(url)
      .then((response) => response.json())
      .then((jsonBody) => jsonBody.results))
      .then((pokemons/*array de pokemons */) => pokemons.map(pokeApi.getPokemosDetail))
      .then((detailRequets) => {
        return Promise.all(detailRequets) //passa cada promisse para um array
      })
    // .then((pokemonsDetails) => pokemonsDetails)
  }
};



