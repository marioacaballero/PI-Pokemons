import style from "./Auxiliar.module.css";

export const paths = (path) => {
  switch (path) {
    case "/home":
      return style.home;
    case "/about":
      return style.about;
    case "/home/newpokemon":
      return style.newpokemon;
    default:
      return style.detail;
  }
};
