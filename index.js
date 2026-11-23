const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const { getPokemonList } = require("./pokemon");
const { commandManager } = require("./commandManager");

const terminal = readline.createInterface({
  input,
  output,
  prompt: "Pokedex >",
  terminal: false,
});

console.log("Starting Pokedex....");

terminal.prompt();
terminal.on("line", async (input) => {
  const commands = input.split(" ");
  await commandManager(commands, terminal);
  terminal.prompt();
});

terminal.on("close", () => {
  console.log("Thanks for using Pokedex");
  process.exit();
});
