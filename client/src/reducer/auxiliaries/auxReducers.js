export const pokeOrder = (pokemons, orderType) => {
  let pokeOrder = pokemons;
  switch (orderType) {
    case "nameAZ": {
      pokeOrder = pokemons.sort((a, b) => {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });
      return pokeOrder;
    }
    case "nameZA": {
      pokeOrder = pokemons.sort((a, b) => {
        return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
      });
      return pokeOrder;
    }
    case "atkUp": {
      pokeOrder = pokemons.sort((a, b) => b.attack - a.attack);
      return pokeOrder;
    }
    case "atkDown": {
      pokeOrder = pokemons.sort((a, b) => a.attack - b.attack);
      return pokeOrder;
    }
    case "pokeDown": {
      pokeOrder = pokemons.sort((a, b) => b.id - a.id);
      return pokeOrder;
    }
    default:
      pokeOrder = pokemons.sort((a, b) => a.id - b.id);
      return pokeOrder;
  }
};

export const pokeFilter = (pokemons, filterType) => {
  let pokeFilter;
  if (filterType === "all") {
    pokeFilter = pokemons;
  } else if (filterType === "API") {
    pokeFilter = pokemons.filter((poke) => !poke.createdOnDb);
  } else if (filterType === "DB") {
    pokeFilter = pokemons.filter((poke) => poke.createdOnDb);
    if (pokeFilter.length === 0) {
      pokeFilter = pokemons;
      alert("We don't have any pokemon on DB");
    }
  } else {
    pokeFilter = pokemons.filter(
      (poke) => poke.types.some((typ) => typ.name === filterType) //I use some because give a boolean result. Find methods give the element or undefined
    );
    if (pokeFilter.length === 0) {
      pokeFilter = pokemons;
      alert("We don't have that pokemon's type");
    }
  }
  return pokeFilter;
};
