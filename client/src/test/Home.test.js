import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import Home from "../components/Home copy/Home2";
import Card from "../components/Card copy/Card2";
import Filters from "../components/Filters/Filters";
import Pagination from "../components/Pagination/Pagination";

configure({ adapter: new Adapter() });

xdescribe("<Home />", () => {
  let store;
  const mockStore = configureStore([thunk]);
  const state = {
    pokemons: {
      pokemons: [
        {
          id: 1,
          name: "bulbasaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          types: [
            {
              name: "grass",
              img: "https://typedex.app/images/ui/types/dark/grass.svg",
            },
            {
              name: "poison",
              img: "https://typedex.app/images/ui/types/dark/poison.svg",
            },
          ],
          hp: 45,
          attack: 49,
          defense: 49,
          speed: 45,
          height: 7,
          weight: 69,
        },
        {
          id: 2,
          name: "ivysaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
          types: [
            {
              name: "grass",
              img: "https://typedex.app/images/ui/types/dark/grass.svg",
            },
            {
              name: "poison",
              img: "https://typedex.app/images/ui/types/dark/poison.svg",
            },
          ],
          hp: 60,
          attack: 62,
          defense: 63,
          speed: 60,
          height: 10,
          weight: 130,
        },
        {
          id: 3,
          name: "venusaur",
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
          types: [
            {
              name: "grass",
              img: "https://typedex.app/images/ui/types/dark/grass.svg",
            },
            {
              name: "poison",
              img: "https://typedex.app/images/ui/types/dark/poison.svg",
            },
          ],
          hp: 80,
          attack: 82,
          defense: 83,
          speed: 80,
          height: 20,
          weight: 1000,
        },
      ],
    },
    types: {
      types: [
        {
          id: 1,
          name: "normal",
          img: "https://typedex.app/images/ui/types/dark/normal.svg",
        },
        {
          id: 2,
          name: "fighting",
          img: "https://typedex.app/images/ui/types/dark/fighting.svg",
        },
        {
          id: 3,
          name: "ground",
          img: "https://typedex.app/images/ui/types/dark/ground.svg",
        },
        {
          id: 4,
          name: "flying",
          img: "https://typedex.app/images/ui/types/dark/flying.svg",
        },
      ],
    },
  };

  store = mockStore(state);

  const home = mount(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  it("should be render <div> container", () => {
    expect(home.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("should be render 1 <Card /> for each pokemon", () => {
    expect(home.find(Card)).toHaveLength(3);
  });

  it("should be render <Filters />", () => {
    expect(home.find(Filters)).toHaveLength(1);
  });

  it("should be render <Pagination />", () => {
    expect(home.find(Pagination)).toHaveLength(1);
  });
});
