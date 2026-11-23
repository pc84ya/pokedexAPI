const { getPokemonList, getPokemon } = require("./pokemon");

const commandManager = async (commands, terminal) => {
  const [type] = commands;
  switch (type) {
    case "pokemon": {
      const pokemonList = await getPokemonList();
      console.log(pokemonList);
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
