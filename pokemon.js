const callingParams = {};
const getPokemonList = async (url) => {
  if (!url) {
    throw new Error("Page does not exist");
  }
  const response = await fetch(url);
  const data = await response.json();
  data.results.forEach((element) => {
    console.log(element.name);
  });
  return {
    next: data.next,
    previous: data.previous,
  };
  // callingParams.next = data.next;
  // callingParams.previous = data.previous;
};

const getPokemon = async (nameOrId) => {
  try {
    if (!nameOrId) {
      throw new Error("Name or id is required");
    }
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameOrId}`,
    );
    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPokemon,
  getPokemonList,
};
