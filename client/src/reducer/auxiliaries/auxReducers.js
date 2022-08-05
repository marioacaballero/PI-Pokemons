export const pokeOrder = (pokemons, orderType) => {
  //Switch to choose the action.payload (2nd argu) and sort the state array (1st argu) about that kind of action
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
    // } else if (filterType === "API") {
    //   pokeFilter = pokemons.filter((poke) => !poke.createdOnDb);
    // } else if (filterType === "DB") {
    //   pokeFilter = pokemons.filter((poke) => poke.createdOnDb);
    //   if (pokeFilter.length === 0) {
    //     pokeFilter = pokemons;
    //     alert("We don't have any pokemon on DB");
    //   }
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

export const pokeFilter2 = (pokemons2, filterType2, pokemons) => {
  // first argu = array to filter, 2nd argu = action.payload, 3rd argu = first filter array to compare
  if (pokemons2.length !== pokemons.length) {
    //If the compare length is dif, we have pokemons filter on the 3rd
    let pokeFilter;
    if (filterType2 === "API") {
      pokeFilter = pokemons2.filter((poke) => !poke.createdOnDb);
      if (pokeFilter.length === 0) {
        pokeFilter = pokemons2;
        alert("We don't have pokemons on API with that filter");
      }
    } else if (filterType2 === "DB") {
      pokeFilter = pokemons2.filter((poke) => poke.createdOnDb);
      if (pokeFilter.length === 0) {
        pokeFilter = pokemons2;
        alert("We don't have pokemons on DB with that filter");
      }
    } else {
      pokeFilter = pokemons2;
    }
    return pokeFilter;
  } else {
    //If not, we have the same length, so we have all pokemons without filter
    let pokeFilter;
    if (filterType2 === "API") {
      pokeFilter = pokemons2.filter((poke) => !poke.createdOnDb);
    } else if (filterType2 === "DB") {
      pokeFilter = pokemons2.filter((poke) => poke.createdOnDb);
      if (pokeFilter.length === 0) {
        pokeFilter = pokemons2;
        alert("We don't have pokemons on DB");
      }
    } else {
      pokeFilter = pokemons2;
    }
    return pokeFilter;
  }
};
