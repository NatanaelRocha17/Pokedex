const url = `https://pokeapi.co/api/v2/pokemon?offset=${0}&limit=${10}`;


const pokemonsList = document.querySelector("#pokemonsList")


fetch(url)
    .then( (response) =>{  //O fetch retornará uma promise(promessa de que vai vir uma resposta)
       console.log(response)
       return response.json();
    })   
    .then((jsonBody) =>{
        console.log(jsonBody)
        return jsonBody.results;
    })
    .then((pokemons) =>{
        console.log(pokemons)
    })
    .finally(() => {
        console.log("reuisição concluida")
    })
