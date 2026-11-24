const { getPokemonList, getPokemon } = require("./pokemon");
const { pokemonCommandMangaer } = require("./subCommand");

const commandManager = async (commands, terminal) => {
  const [type, ...args] = commands;
  switch (type) {
    case "pokemon": {
      await pokemonCommandMangaer(args);
      break;
    }
    case "name": {
    }
    case "exit": {
      terminal.close();
      process.exit();
      break;
    }

    default:
      console.log(`Command ${type} not found`);
  }
};

module.exports = { commandManager };
