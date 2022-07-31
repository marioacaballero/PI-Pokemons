import style from "./Type.module.css";

export const typ = (arrTyp) => {
  switch (arrTyp[0].name) {
    case "bug": {
      return style.bug;
    }
    case "dark": {
      return style.dark;
    }
    case "dragon": {
      return style.dragon;
    }
    case "electric": {
      return style.electric;
    }
    case "fairy": {
      return style.fairy;
    }
    case "fighting": {
      return style.fighting;
    }
    case "fire": {
      return style.fire;
    }
    case "flying": {
      return style.flying;
    }
    case "ghost": {
      return style.ghost;
    }
    case "grass": {
      return style.grass;
    }
    case "ground": {
      return style.ground;
    }
    case "ice": {
      return style.ice;
    }
    case "normal": {
      return style.normal;
    }
    case "poison": {
      return style.poison;
    }
    case "psychic": {
      return style.psychic;
    }
    case "rock": {
      return style.rock;
    }
    case "steel": {
      return style.steel;
    }
    case "water": {
      return style.water;
    }
    default: {
      return style.normal;
    }
  }
};
