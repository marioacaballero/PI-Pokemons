import clickSound from "../Music/ButtonEffect.mp3";

export const capFirstLet = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const handleSound = () => {
  var sonido = new Audio();
  sonido.src = clickSound;
  return sonido.play();
};

//create a handle validator to set erros
export const handleValidate = (pokemon) => {
  //some validator to prevent post on db with errors
  let notNull = /\S+/; //prevent null
  let notNumber = /^[A-Za-z]+$/; //only alphabetics characters
  let error = "";

  if (!notNull.test(pokemon.name)) {
    return (error = "Name cannot be null");
  }

  if (!notNumber.test(pokemon.name)) {
    return (error = "Name must be a string");
  }

  if (pokemon.firstT === "") {
    return (error = "The first type is required");
  }

  if (
    pokemon.firstT !== "" &&
    pokemon.secondT !== "" &&
    pokemon.secondT === pokemon.firstT
  ) {
    return (error = "The type cannot repeat");
  }

  if (
    Number(pokemon.hp) >= 150 ||
    Number(pokemon.hp) <= 0 ||
    Number(pokemon.attack) >= 150 ||
    Number(pokemon.attack) <= 0 ||
    Number(pokemon.defense) >= 150 ||
    Number(pokemon.defense) <= 0 ||
    Number(pokemon.speed) >= 150 ||
    Number(pokemon.speed) <= 0
  ) {
    return (error = "HP, ATTACK, DEFENSE AND SPEED must be between 0 and 150");
  }

  if (pokemon.weight >= 9999 || pokemon.weight <= 0) {
    return (error = "WEIGHT must be between 0 and 9999");
  }

  if (pokemon.height >= 200 || pokemon.height <= 0) {
    return (error = "HEIGHT must be between 0 and 200");
  }

  return error;
};

export const validators = (pokemon) => {
  //some validator to prevent post on db with errors
  let notNull = /\S+/; //prevent null
  let notNumber = /^[A-Za-z]+$/; //only alphabetics characters
  let error = {};

  if (!notNull.test(pokemon.name)) {
    error.name = "Name cannot be null";
  }

  if (!notNumber.test(pokemon.name)) {
    error.name = "Name must be a string";
  }

  if (pokemon.firstT === "" && pokemon.secondT === "") {
    error.types = "One type is required";
  }

  if (
    pokemon.firstT !== "" &&
    pokemon.secondT !== "" &&
    pokemon.secondT === pokemon.firstT
  ) {
    error.types = "The type cannot repeat";
  }

  if (
    Number(pokemon.hp) >= 150 ||
    Number(pokemon.hp) <= 0 ||
    Number(pokemon.attack) >= 150 ||
    Number(pokemon.attack) <= 0 ||
    Number(pokemon.defense) >= 150 ||
    Number(pokemon.defense) <= 0 ||
    Number(pokemon.speed) >= 150 ||
    Number(pokemon.speed) <= 0
  ) {
    error.stats = "HP, ATTACK, DEFENSE AND SPEED must be between 0 and 150";
  }

  if (pokemon.weight >= 9999 || pokemon.weight <= 0) {
    error.height = "WEIGHT must be between 0 and 9999";
  }

  if (pokemon.height >= 200 || pokemon.height <= 0) {
    error.weight = "HEIGHT must be between 0 and 200";
  }

  return error;
};
