const { getPokemonList } = require("./pokemon");

const callingParams = {
  url: "https://pokeapi.co/api/v2/pokemon",
};

const pokemonCommandMangaer = async (args) => {
  try {
    const [subCommand = "list"] = args; //next -n, previous -p, search -s

    switch (subCommand) {
      case "-n": {
        const { next, previous } = await getPokemonList(callingParams.next);
        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }
      case "-p": {
        const { next, previous } = await getPokemonList(callingParams.previous);
        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }
      case "-s": {
        break;
      }
      case "list": {
        const { next, previous } = await getPokemonList(callingParams.url);
        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }
      default: {
        console.log(`Invalid command ${subCommand}`);
      }
      // console.log(pokemonList);
    }
  } catch (error) {
    console.log("Error getting", error);
  }
};

module.exports = {
  pokemonCommandMangaer,
};
